grammar Clima;

climaScript: 'automate' 'clima' ID '{' accion* '}';

accion: monitoreo | respuesta | imprimir;

monitoreo: 'monitorear' sensorClima 'cada' NUM 'min' ';';  // Corregido "monitorean" → "monitorear"
respuesta: 'cuando' sensorClima 'sube' 'de' NUM 'hacer' 'activar' aspecto '.';
imprimir: 'imprimir' STRING 'cada' NUM 'min' ';';

sensorClima: 'temperatura' | 'humedad';
aspecto: 'ventilacion' | 'riego';

ID: [a-zA-Z_][a-zA-Z0-9_]*;
NUM: [0-9]+;
STRING: '"' .*? '"';  // Corregido la definición
WS: [ \t\r\n]+ -> skip;  // Corregido "MS" → "WS"