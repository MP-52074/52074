const fs = require('fs');
const files = ['ClimaLexer.js', 'ClimaParser.js', 'ClimaListener.js'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Conversión de imports
        content = content.replace(/import\s+antlr4\s+from\s+'antlr4';?/g, 'const antlr4 = require("antlr4");');
        content = content.replace(/import\s+.+?\s+from\s+'.+?\.js';?/g, '');
        content = content.replace(/export\s+default\s+class/g, 'class');
        
        // Añadir exports si no existen
        if (!content.includes('module.exports') && content.match(/class\s+(\w+)/)) {
            const className = content.match(/class\s+(\w+)/)[1];
            content += `\n\nmodule.exports = ${className};`;
        }
        
        fs.writeFileSync(file, content);
        console.log(`✅ ${file} convertido a CommonJS`);
    }
});

console.log("Conversión completada");