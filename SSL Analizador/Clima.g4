grammar Clima;

climaScript: 'automate' 'clima' ID '{' accion* '}';

accion: monitoreo | respuesta | imprimir;

monitoreo: 'monitorear' sensorClima 'cada' NUM 'min' TERMINADOR;
respuesta: 'cuando' sensorClima 'sube' 'de' NUM 'hacer' 'activar' aspecto TERMINADOR;
imprimir: 'imprimir' STRING 'cada' NUM 'min' TERMINADOR;

sensorClima: 'temperatura' | 'humedad';
aspecto: 'ventilacion' | 'riego';

// Solución definitiva para terminadores
TERMINADOR: '.' {this.type = TERMINADOR_UNICO;} 
             | ';' {this.type = TERMINADOR_UNICO;};
TERMINADOR_UNICO: ; // Token ficticio para unificar

ID: [a-zA-Z_][a-zA-Z0-9_]*;
NUM: [0-9]+;
STRING: '"' (~["\r\n] | '\\"')* '"';
WS: [ \t\r\n]+ -> skip;