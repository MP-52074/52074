# Proyecto Analizador de Scripts Climáticos
Alumno: Marcos Pedraza

Carrera: Ingenieria en Sistemas de Información

Comisión: 2k01

Año: 2025

Materia: SSL

## Descripción
Analizador léxico/sintáctico para scripts de automatización climática desarrollado con ANTLR4 y Node.js.

## Instalación
1. Clonar repositorio:
git clone https://github.com/MP-52074/52074.git
2. Cambia la direccion al repositorio en el cmd: cd 52074/SSL Analizador
3. Para abrir el proyecto en VS Code escribe esto en la terminal: code .
4. Instalar dependencias: npm install

## Configuración
1. Crear/editar archivo input.txt en la raíz del proyecto con tu script:

Ejemplo: automate clima mi_invernadero {
monitorear temperatura cada 30 min;
cuando humedad sube de 80 hacer activar riego;
imprimir "Humedad crítica" cada 60 min;
}

## Ejecución
npm start

## Estructura de Archivos
/52074
├── src/
│   ├── generated/    # Código generado por ANTLR4
│   └── Clima.g4      # Gramática del lenguaje
├── input.txt         # Script de entrada
├── index.js          # Analizador principal
└── package.json      # Configuración de Node

## Comandos Útiles
# Regenerar analizador (si modificas Clima.g4)
npm run generate-parser

# Ejecutar pruebas
npm test

## Ejemplo de Salida
📄 Input analizado:
automate clima ejemplo {
  monitorear humedad cada 15 min;
}

=== TABLA DE LEXEMAS ===
| Tipo        | Lexema         | Posición  |
|-------------|----------------|-----------|
| ID          | ejemplo        | 1:8       |
| NUM         | 15             | 2:23      |

🌳 Árbol Sintáctico:
(climaScript automate clima ejemplo...)

🔧 Configuración Interpretada:
   → Monitorear humedad cada 15 min
   → Regla: Si humedad > 80, activar riego

## Solución de Problemas
1. Errores de sintaxis:
   - Verificar que input.txt siga la gramática de Clima.g4
   - Revisar terminadores (; o .) en cada instrucción


