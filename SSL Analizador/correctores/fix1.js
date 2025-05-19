const fs = require('fs');
const path = require('path');

// Archivos a convertir
const filesToConvert = [
    'ClimaLexer.js',
    'ClimaParser.js', 
    'ClimaListener.js'
];

// Función principal de conversión
function convertFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // 1. Convertir imports de ES Modules a CommonJS
        content = content.replace(/import\s+antlr4\s+from\s+['"]antlr4['"];?/g, 'const antlr4 = require("antlr4");');
        content = content.replace(/import\s+(\w+)\s+from\s+['"](\.\/\w+)['"];?/g, 'const $1 = require("$2");');
        
        // 2. Convertir exports
        content = content.replace(/export\s+default\s+class\s+(\w+)/g, 'class $1');
        
        // 3. Corregir referencias ATN
        content = content.replace(/antlr4\.atn\.ATNDeserializer/g, 'antlr4.ATNDeserializer');
        content = content.replace(/antlr4\.dfa\.DFA/g, 'antlr4.DFA');
        content = content.replace(/antlr4\.atn\.PredictionContextCache/g, 'antlr4.PredictionContextCache');
        content = content.replace(/antlr4\.atn\.LexerATNSimulator/g, 'antlr4.LexerATNSimulator');
        content = content.replace(/antlr4\.atn\.ParserATNSimulator/g, 'antlr4.ParserATNSimulator');
        
        // 4. Añadir exportación CommonJS si no existe
        const className = path.basename(filePath, '.js');
        if (!content.includes('module.exports')) {
            content += `\n\nmodule.exports = ${className};`;
        }
        
        fs.writeFileSync(filePath, content);
        console.log(`✅ ${filePath} convertido correctamente`);
        return true;
    } catch (error) {
        console.error(`❌ Error procesando ${filePath}:`, error.message);
        return false;
    }
}

// Procesar todos los archivos
console.log('Iniciando conversión de archivos...');
let successCount = 0;

filesToConvert.forEach(file => {
    if (fs.existsSync(file)) {
        if (convertFile(file)) successCount++;
    } else {
        console.log(`⚠️ ${file} no encontrado, omitiendo...`);
    }
});

// Resultado final
console.log(`\nConversión completada: ${successCount}/${filesToConvert.length} archivos procesados exitosamente`);

// Verificación adicional para ClimaParser
if (fs.existsSync('ClimaParser.js')) {
    const parserContent = fs.readFileSync('ClimaParser.js', 'utf8');
    if (parserContent.includes("import ClimaListener")) {
        console.log('\n⚠️ Advertencia: ClimaParser.js aún contiene imports no convertidos');
        console.log('Ejecute el script nuevamente o edite manualmente el archivo');
    }
}