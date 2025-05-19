// Generated from Clima.g4 by ANTLR 4.13.2
// jshint ignore: start
const antlr4 = require("antlr4");
import ClimaListener from './ClimaListener.js';
const serializedATN = [4,1,23,60,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,0,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,0,1,0,
1,1,1,1,1,1,3,1,30,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,0,0,7,
0,2,4,6,8,10,12,0,2,1,0,16,17,1,0,18,19,55,0,14,1,0,0,0,2,29,1,0,0,0,4,31,
1,0,0,0,6,38,1,0,0,0,8,48,1,0,0,0,10,55,1,0,0,0,12,57,1,0,0,0,14,15,5,1,
0,0,15,16,5,2,0,0,16,17,5,20,0,0,17,21,5,3,0,0,18,20,3,2,1,0,19,18,1,0,0,
0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,24,1,0,0,0,23,21,1,0,0,0,
24,25,5,4,0,0,25,1,1,0,0,0,26,30,3,4,2,0,27,30,3,6,3,0,28,30,3,8,4,0,29,
26,1,0,0,0,29,27,1,0,0,0,29,28,1,0,0,0,30,3,1,0,0,0,31,32,5,5,0,0,32,33,
3,10,5,0,33,34,5,6,0,0,34,35,5,21,0,0,35,36,5,7,0,0,36,37,5,8,0,0,37,5,1,
0,0,0,38,39,5,9,0,0,39,40,3,10,5,0,40,41,5,10,0,0,41,42,5,11,0,0,42,43,5,
21,0,0,43,44,5,12,0,0,44,45,5,13,0,0,45,46,3,12,6,0,46,47,5,14,0,0,47,7,
1,0,0,0,48,49,5,15,0,0,49,50,5,22,0,0,50,51,5,6,0,0,51,52,5,21,0,0,52,53,
5,7,0,0,53,54,5,8,0,0,54,9,1,0,0,0,55,56,7,0,0,0,56,11,1,0,0,0,57,58,7,1,
0,0,58,13,1,0,0,0,2,21,29];


const atn = new antlr4.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

class ClimaParser extends antlr4.Parser {

    static grammarFileName = "Clima.g4";
    static literalNames = [ null, "'automate'", "'clima'", "'{'", "'}'", 
                            "'monitorear'", "'cada'", "'min'", "';'", "'cuando'", 
                            "'sube'", "'de'", "'hacer'", "'activar'", "'.'", 
                            "'imprimir'", "'temperatura'", "'humedad'", 
                            "'ventilacion'", "'riego'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, "ID", "NUM", "STRING", 
                             "WS" ];
    static ruleNames = [ "climaScript", "accion", "monitoreo", "respuesta", 
                         "imprimir", "sensorClima", "aspecto" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ClimaParser.ruleNames;
        this.literalNames = ClimaParser.literalNames;
        this.symbolicNames = ClimaParser.symbolicNames;
    }



	climaScript() {
	    let localctx = new ClimaScriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ClimaParser.RULE_climaScript);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.match(ClimaParser.T__0);
	        this.state = 15;
	        this.match(ClimaParser.T__1);
	        this.state = 16;
	        this.match(ClimaParser.ID);
	        this.state = 17;
	        this.match(ClimaParser.T__2);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 33312) !== 0)) {
	            this.state = 18;
	            this.accion();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 24;
	        this.match(ClimaParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion() {
	    let localctx = new AccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ClimaParser.RULE_accion);
	    try {
	        this.state = 29;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 26;
	            this.monitoreo();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 27;
	            this.respuesta();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 28;
	            this.imprimir();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	monitoreo() {
	    let localctx = new MonitoreoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ClimaParser.RULE_monitoreo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(ClimaParser.T__4);
	        this.state = 32;
	        this.sensorClima();
	        this.state = 33;
	        this.match(ClimaParser.T__5);
	        this.state = 34;
	        this.match(ClimaParser.NUM);
	        this.state = 35;
	        this.match(ClimaParser.T__6);
	        this.state = 36;
	        this.match(ClimaParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	respuesta() {
	    let localctx = new RespuestaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ClimaParser.RULE_respuesta);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(ClimaParser.T__8);
	        this.state = 39;
	        this.sensorClima();
	        this.state = 40;
	        this.match(ClimaParser.T__9);
	        this.state = 41;
	        this.match(ClimaParser.T__10);
	        this.state = 42;
	        this.match(ClimaParser.NUM);
	        this.state = 43;
	        this.match(ClimaParser.T__11);
	        this.state = 44;
	        this.match(ClimaParser.T__12);
	        this.state = 45;
	        this.aspecto();
	        this.state = 46;
	        this.match(ClimaParser.T__13);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ClimaParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(ClimaParser.T__14);
	        this.state = 49;
	        this.match(ClimaParser.STRING);
	        this.state = 50;
	        this.match(ClimaParser.T__5);
	        this.state = 51;
	        this.match(ClimaParser.NUM);
	        this.state = 52;
	        this.match(ClimaParser.T__6);
	        this.state = 53;
	        this.match(ClimaParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sensorClima() {
	    let localctx = new SensorClimaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ClimaParser.RULE_sensorClima);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        _la = this._input.LA(1);
	        if(!(_la===16 || _la===17)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aspecto() {
	    let localctx = new AspectoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ClimaParser.RULE_aspecto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        _la = this._input.LA(1);
	        if(!(_la===18 || _la===19)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ClimaParser.EOF = antlr4.Token.EOF;
ClimaParser.T__0 = 1;
ClimaParser.T__1 = 2;
ClimaParser.T__2 = 3;
ClimaParser.T__3 = 4;
ClimaParser.T__4 = 5;
ClimaParser.T__5 = 6;
ClimaParser.T__6 = 7;
ClimaParser.T__7 = 8;
ClimaParser.T__8 = 9;
ClimaParser.T__9 = 10;
ClimaParser.T__10 = 11;
ClimaParser.T__11 = 12;
ClimaParser.T__12 = 13;
ClimaParser.T__13 = 14;
ClimaParser.T__14 = 15;
ClimaParser.T__15 = 16;
ClimaParser.T__16 = 17;
ClimaParser.T__17 = 18;
ClimaParser.T__18 = 19;
ClimaParser.ID = 20;
ClimaParser.NUM = 21;
ClimaParser.STRING = 22;
ClimaParser.WS = 23;

ClimaParser.RULE_climaScript = 0;
ClimaParser.RULE_accion = 1;
ClimaParser.RULE_monitoreo = 2;
ClimaParser.RULE_respuesta = 3;
ClimaParser.RULE_imprimir = 4;
ClimaParser.RULE_sensorClima = 5;
ClimaParser.RULE_aspecto = 6;

class ClimaScriptContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClimaParser.RULE_climaScript;
    }

	ID() {
	    return this.getToken(ClimaParser.ID, 0);
	};

	accion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AccionContext);
	    } else {
	        return this.getTypedRuleContext(AccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.enterClimaScript(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.exitClimaScript(this);
		}
	}


}



class AccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClimaParser.RULE_accion;
    }

	monitoreo() {
	    return this.getTypedRuleContext(MonitoreoContext,0);
	};

	respuesta() {
	    return this.getTypedRuleContext(RespuestaContext,0);
	};

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.enterAccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.exitAccion(this);
		}
	}


}



class MonitoreoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClimaParser.RULE_monitoreo;
    }

	sensorClima() {
	    return this.getTypedRuleContext(SensorClimaContext,0);
	};

	NUM() {
	    return this.getToken(ClimaParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.enterMonitoreo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.exitMonitoreo(this);
		}
	}


}



class RespuestaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClimaParser.RULE_respuesta;
    }

	sensorClima() {
	    return this.getTypedRuleContext(SensorClimaContext,0);
	};

	NUM() {
	    return this.getToken(ClimaParser.NUM, 0);
	};

	aspecto() {
	    return this.getTypedRuleContext(AspectoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.enterRespuesta(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.exitRespuesta(this);
		}
	}


}



class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClimaParser.RULE_imprimir;
    }

	STRING() {
	    return this.getToken(ClimaParser.STRING, 0);
	};

	NUM() {
	    return this.getToken(ClimaParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.enterImprimir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.exitImprimir(this);
		}
	}


}



class SensorClimaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClimaParser.RULE_sensorClima;
    }


	enterRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.enterSensorClima(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.exitSensorClima(this);
		}
	}


}



class AspectoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ClimaParser.RULE_aspecto;
    }


	enterRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.enterAspecto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ClimaListener ) {
	        listener.exitAspecto(this);
		}
	}


}




ClimaParser.ClimaScriptContext = ClimaScriptContext; 
ClimaParser.AccionContext = AccionContext; 
ClimaParser.MonitoreoContext = MonitoreoContext; 
ClimaParser.RespuestaContext = RespuestaContext; 
ClimaParser.ImprimirContext = ImprimirContext; 
ClimaParser.SensorClimaContext = SensorClimaContext; 
ClimaParser.AspectoContext = AspectoContext; 

module.exports = ClimaParser;