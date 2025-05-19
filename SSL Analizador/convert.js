const fs = require('fs');
const files = ['ClimaLexer.js', 'ClimaParser.js'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Conversión de imports/exports
    content = content
        .replace(/import antlr4 from 'antlr4';/g, 'const antlr4 = require("antlr4");')
        .replace(/export default class (\w+)/g, 'class $1')
        .replace(/export \{([^}]*)\};/g, 'module.exports = {$1};');
    
    // Asegurar exportación
    if (!content.includes('module.exports')) {
        const className = content.match(/class (\w+)/)[1];
        content += `\n\nmodule.exports = ${className};`;
    }
    
    fs.writeFileSync(file, content);
});

console.log('✅ Conversión completada');