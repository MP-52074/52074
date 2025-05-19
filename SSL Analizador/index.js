import antlr4 from 'antlr4';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ClimaLexer from './src/generated/ClimaLexer.js';
import ClimaParser from './src/generated/ClimaParser.js';
import ClimaListener from './src/generated/ClimaListener.js';

// Configuración de rutas ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputFilePath = path.join(__dirname, 'input.txt');

// ===== Funciones auxiliares mejoradas =====

function cargarInput() {
    try {
        if (fs.existsSync(inputFilePath)) {
            return fs.readFileSync(inputFilePath, 'utf-8');
        }
        return `automate clima default {
  monitorear temperatura cada 30 min;
  cuando humedad sube de 75 hacer activar ventilacion;
  imprimir "Mensaje por defecto" cada 60 min;
}`;
    } catch (error) {
        console.error("❌ Error al leer input.txt:", error.message);
        process.exit(1);
    }
}

function mostrarTablaLexemas(tokens) {
    console.log('\n=== TABLA DE LEXEMAS ===');
    console.log('| Tipo'.padEnd(15) + '| Lexema'.padEnd(25) + '| Línea:Columna |');
    console.log('-'.repeat(55));
    
    tokens.forEach(token => {
        if (token.type !== -1) {
            const tipo = ClimaLexer.symbolicNames[token.type] || `TOKEN_${token.type}`;
            const lexema = token.text.replace(/\n/g, '\\n');
            console.log(`| ${tipo.padEnd(13)} | ${lexema.padEnd(23)} | ${token.line}:${token.column.toString().padEnd(5)} |`);
        }
    });
    console.log('-'.repeat(55));
}

// ===== Programa principal con mejor manejo de errores =====

const input = cargarInput();
console.log('\n📄 Input analizado:\n' + input + '\n' + '='.repeat(50));

const chars = new antlr4.CharStream(input);
const lexer = new ClimaLexer(chars);

// Listener de errores léxicos
lexer.removeErrorListeners();
lexer.addErrorListener({
    syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
        console.error(`❌ Error léxico (${line}:${column}): ${msg}`);
        console.error(`   Token inválido: '${offendingSymbol.text}'`);
    }
});

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new ClimaParser(tokens);

// Listener de errores sintácticos mejorado
parser.removeErrorListeners();
parser.addErrorListener({
    syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
        const errorType = msg.includes("missing") ? "Elemento faltante" : 
                        msg.includes("extraneous") ? "Elemento inesperado" : 
                        "Error de sintaxis";
        
        console.error(`\n❌ ${errorType} (${line}:${column}):`);
        console.error(`   ${msg}`);
        
        // Mostrar contexto del error
        const lines = input.split('\n');
        if (line <= lines.length) {
            console.error(`\nLínea ${line}: ${lines[line-1]}`);
            console.error(' '.repeat(column + `Línea ${line}: `.length) + '^');
        }
        
        // Sugerencias basadas en el error
        if (msg.includes("expecting {'monitorear', 'cuando', 'imprimir'}")) {
            console.error("   Sugerencia: Las acciones válidas son: monitorear, cuando o imprimir");
        } else if (msg.includes("expecting '.'")) {
            console.error("   Sugerencia: Termina la acción con '.' o ';'");
        }
    }
});

let tree;
try {
    parser.buildParseTrees = true;
    tree = parser.climaScript();
} catch (e) {
    console.error("\n💥 Error crítico al analizar la entrada:");
    console.error(e.message);
    process.exit(1);
}

tokens.fill();
mostrarTablaLexemas(tokens.tokens);

console.log('\n🌳 ÁRBOL SINTÁCTICO:');
console.log(tree.toStringTree(parser.ruleNames, null, 2));
console.log('='.repeat(50));

class AnalizadorClima extends ClimaListener {
    enterClimaScript(ctx) {
        console.log(`\n🔧 Configuración: ${ctx.ID().getText()}`);
    }
    
    enterMonitoreo(ctx) {
        console.log(`   → Monitorear ${ctx.sensorClima().getText()} cada ${ctx.NUM().getText()} min`);
    }
    
    enterRespuesta(ctx) {
        console.log(`   → Regla: Si ${ctx.sensorClima().getText()} > ${ctx.NUM().getText()}, activar ${ctx.aspecto().getText()}`);
    }
    
    enterImprimir(ctx) {
        console.log(`   → Imprimir "${ctx.STRING().getText().slice(1, -1)}" cada ${ctx.NUM().getText()} min`);
    }
}

const walker = new antlr4.tree.ParseTreeWalker();
walker.walk(new AnalizadorClima(), tree);

// Verificación final de errores
const errorCount = lexer._syntaxErrors + parser._syntaxErrors;
if (errorCount === 0) {
    console.log('\n✅ Análisis completado exitosamente!');
} else {
    console.log(`\n⚠️  Completado con ${errorCount} error(es). Revise los mensajes anteriores.`);
}
