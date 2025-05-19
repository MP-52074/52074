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

// ===== Funciones auxiliares =====

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

// ===== Programa principal =====

const input = cargarInput();
console.log('\n📄 Input analizado:\n' + input + '\n' + '='.repeat(50));

const chars = new antlr4.CharStream(input);
const lexer = new ClimaLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new ClimaParser(tokens);

parser.removeErrorListeners();
parser.addErrorListener({
    syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
        if (msg.includes("expecting '.'")) {
            console.warn(`⚠️  Advertencia (${line}:${column}): Se prefiere '.' pero se acepta ';'`);
        } else {
            console.error(`❌ Error (${line}:${column}): ${msg}`);
        }
    }
});

parser.buildParseTrees = true;
const tree = parser.climaScript();

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
        // MODIFICACIÓN SOLICITADA AQUÍ (cambio de formato)
        console.log(`   → Regla: Si ${ctx.sensorClima().getText()} > ${ctx.NUM().getText()}, activar ${ctx.aspecto().getText()}`);
    }
    
    enterImprimir(ctx) {
        console.log(`   → Imprimir "${ctx.STRING().getText().slice(1, -1)}" cada ${ctx.NUM().getText()} min`);
    }
}

const walker = new antlr4.tree.ParseTreeWalker();
walker.walk(new AnalizadorClima(), tree);

console.log('\n✅ Análisis completado exitosamente!');