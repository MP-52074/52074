const fs = require("fs");
const files = ["ClimaLexer.js", "ClimaParser.js"];

files.forEach(file => {
    let content = fs.readFileSync(file, "utf8");
    
    // Conversión completa
    content = content
        .replace(/import antlr4 from 'antlr4';/g, 'const antlr4 = require("antlr4");')
        .replace(/export default class/g, 'class')
        .replace(/antlr4\.atn\.ATNDeserializer/g, 'antlr4.ATNDeserializer')
        .replace(/antlr4\.dfa\.DFA/g, 'antlr4.DFA')
        + '\nmodule.exports = ' + file.split('.')[0] + ';';

    fs.writeFileSync(file, content);
});
console.log("Conversión completada!");
