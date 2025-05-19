const fs = require('fs');
const files = ['ClimaLexer.js', 'ClimaParser.js'];

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Conversión de todas las posibles variantes
        content = content
            .replace(/antlr4\.atn\.ATNDeserializer/g, 'antlr4.ATNDeserializer')
            .replace(/antlr4\.dfa\.DFA/g, 'antlr4.DFA')
            .replace(/antlr4\.atn\.PredictionContextCache/g, 'antlr4.PredictionContextCache')
            .replace(/new antlr4\.atn\.ParserATNSimulator/g, 'new antlr4.ParserATNSimulator')
            .replace(/new antlr4\.LexerATNSimulator/g, 'new antlr4.LexerATNSimulator');

        fs.writeFileSync(file, content);
        console.log(`✅ ${file} modificado correctamente`);
    } catch (e) {
        console.error(`⚠️ Error procesando ${file}:`, e.message);
    }
});

console.log("🎉 Todas las referencias han sido actualizadas!");