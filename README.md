# Clima Script
Nombre: Marcos

Apellido: Pedraza

Carrera: Ing. en Sistemas de Información

Comisión: 2k01

Materia: SSL (2025)

## Descripción
  Este proyecto es un analizador léxico y sintáctico diseñado para scripts de automatización climática, utilizando ANTLR4 y Node.js. 
Permite interpretar comandos en un lenguaje diseñado para monitorear y controlar variables ambientales (como temperatura y humedad) en escenarios como invernaderos.

## Estructura de Archivos
/52074

├── src/

│   ├── generated/  # Código generado por ANTLR4

│   └── Clima.g4    # Gramática del lenguaje

├── input.txt       # Script de entrada

├── index.js        # Analizador principal

└── package.json    # Configuración de Node.js

## Instalación y Ejecución

1. Clonar repositorio con:
   git clone https://github.com/MP-52074/52074.git
   
2. Cambia la direccion al repositorio en el cmd con:
   cd 52074/SSL\ Analizador
   
3. Para abrir el proyecto en VS Code escribe en la terminal:
   code .
   
4. Instalar dependencias con:
   npm install
   
5. Ejecutar con:
   npm start

## Configuración
1. Crear/editar archivo input.txt en la raíz del proyecto con tu script:

Ejemplo: 

automate clima mi_invernadero {

monitorear temperatura cada 30 min;

cuando humedad sube de 80 hacer activar riego;

imprimir "Humedad crítica" cada 60 min;

}

## Comandos Útiles

Para regenerar analizador: npm run generate-parser

## Ejemplo de Salida
📄 Input analizado:

automate clima ejemplo {

  monitorear humedad cada 15 min;
  
}


<img width="338" alt="Image" src="https://github.com/user-attachments/assets/736dedcd-e0a4-459a-bb93-1b39c6920b39" />



<img width="607" alt="Image" src="https://github.com/user-attachments/assets/ec6d9173-f2a1-4864-a1f7-d8e079bac4ef" />


## Carpeta "correctores"

  Durante el desarrollo del proyecto surguieron inconvenientes, los cuales se solucionaron con los programas contenidos en esta carpeta.

Utilidad de cada programa: 

1. fix-imports.js

Propósito:
  Convierte los archivos generados por ANTLR4 de sintaxis de ES Modules (import/export) a CommonJS (require/module.exports), que es más compatible con Node.js.

Qué hace:
- Reemplaza las declaraciones import de ES Modules por require de CommonJS.
- Elimina importaciones innecesarias.
- Sustituye export default class por class y añade module.exports para exportar las clases.
- Procesa los archivos ClimaLexer.js, ClimaParser.js, y ClimaListener.js.

Para ejecutarlo, copiar y pegar en la Terminal: node fix-imports.js

2. fix-Parser.js

Propósito:
  Corrige referencias internas específicas en los archivos ClimaLexer.js y ClimaParser.js generados por ANTLR4.

Qué hace:
- Sustituye referencias dentro de las clases de ANTLR4 (como antlr4.atn.ATNDeserializer) por versiones simplificadas (antlr4.ATNDeserializer).
- Mejora la compatibilidad con versiones actuales de Node.js y librerías relacionadas.
- Actualiza las referencias en los archivos procesados y confirma los cambios en la consola.

Para ejecutarlo, copiar y pegar en la Terminal: node node fix-Parser.js

3. settings.json

Propósito:
  Archivo de configuración para Visual Studio Code.

Qué hace:
- Define el shell integrado como PowerShell en Windows.
- Excluye carpetas innecesarias como node_modules, .git y .DS_Store.
- Configura ESLint para validar archivos JavaScript.

4. fix.js

Propósito:
  Automatiza la conversión de archivos generados por ANTLR4 al formato CommonJS, incluyendo la exportación de clases y la corrección de referencias.

Qué hace:
- Reemplaza import por require.
- Sustituye export default class por class y añade la exportación con module.exports.
- Corrige referencias internas en los archivos (antlr4.atn.ATNDeserializer, etc.).
- Procesa los archivos ClimaLexer.js y ClimaParser.js.

Diferencia con fix-imports.js:
- Es una versión más simplificada y con menos validaciones adicionales que fix1.js.

Para ejecutarlo, copiar y pegar en la Terminal: node fix.js

5. fix1.js

Propósito:
  Es una versión mejorada y completa de los scripts anteriores, diseñada para manejar conversiones avanzadas y realizar comprobaciones adicionales.

Qué hace:
- Convierte import a require con validaciones más avanzadas.
- Corrige referencias internas de ANTLR4.
- Verifica si los archivos ya contienen exportaciones y las añade si no están presentes.
- Procesa los archivos especificados (ClimaLexer.js, ClimaParser.js, ClimaListener.js).
- Incluye un mensaje de advertencia si detecta imports no convertidos en ClimaParser.js.
- Un resumen detallado de los archivos procesados exitosamente y mensajes de advertencia si se encuentran problemas.

Para ejecutarlo, copiar y pegar en la Terminal: node fix1.js

## Solución de Posibles Problemas
1. Errores de sintaxis:
   - Verificar que input.txt siga la gramática de Clima.g4
   - Revisar terminadores (; o .) en cada instrucción
