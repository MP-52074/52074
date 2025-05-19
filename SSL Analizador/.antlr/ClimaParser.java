// Generated from c:/Users/marqu/OneDrive/Escritorio/SSL Analizador/Clima.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class ClimaParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, ID=20, NUM=21, STRING=22, WS=23, COMMENT=24;
	public static final int
		RULE_climaScript = 0, RULE_accion = 1, RULE_monitoreo = 2, RULE_respuesta = 3, 
		RULE_imprimir = 4, RULE_sensorClima = 5, RULE_aspecto = 6;
	private static String[] makeRuleNames() {
		return new String[] {
			"climaScript", "accion", "monitoreo", "respuesta", "imprimir", "sensorClima", 
			"aspecto"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'automate'", "'clima'", "'{'", "'}'", "'monitorear'", "'cada'", 
			"'min'", "';'", "'cuando'", "'sube'", "'de'", "'hacer'", "'activar'", 
			"'.'", "'imprimir'", "'temperatura'", "'humedad'", "'ventilacion'", "'riego'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, "ID", "NUM", "STRING", 
			"WS", "COMMENT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Clima.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ClimaParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ClimaScriptContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(ClimaParser.ID, 0); }
		public List<AccionContext> accion() {
			return getRuleContexts(AccionContext.class);
		}
		public AccionContext accion(int i) {
			return getRuleContext(AccionContext.class,i);
		}
		public ClimaScriptContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_climaScript; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).enterClimaScript(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).exitClimaScript(this);
		}
	}

	public final ClimaScriptContext climaScript() throws RecognitionException {
		ClimaScriptContext _localctx = new ClimaScriptContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_climaScript);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(14);
			match(T__0);
			setState(15);
			match(T__1);
			setState(16);
			match(ID);
			setState(17);
			match(T__2);
			setState(21);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 33312L) != 0)) {
				{
				{
				setState(18);
				accion();
				}
				}
				setState(23);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(24);
			match(T__3);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AccionContext extends ParserRuleContext {
		public MonitoreoContext monitoreo() {
			return getRuleContext(MonitoreoContext.class,0);
		}
		public RespuestaContext respuesta() {
			return getRuleContext(RespuestaContext.class,0);
		}
		public ImprimirContext imprimir() {
			return getRuleContext(ImprimirContext.class,0);
		}
		public AccionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_accion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).enterAccion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).exitAccion(this);
		}
	}

	public final AccionContext accion() throws RecognitionException {
		AccionContext _localctx = new AccionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_accion);
		try {
			setState(29);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__4:
				enterOuterAlt(_localctx, 1);
				{
				setState(26);
				monitoreo();
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 2);
				{
				setState(27);
				respuesta();
				}
				break;
			case T__14:
				enterOuterAlt(_localctx, 3);
				{
				setState(28);
				imprimir();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MonitoreoContext extends ParserRuleContext {
		public SensorClimaContext sensorClima() {
			return getRuleContext(SensorClimaContext.class,0);
		}
		public TerminalNode NUM() { return getToken(ClimaParser.NUM, 0); }
		public MonitoreoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_monitoreo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).enterMonitoreo(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).exitMonitoreo(this);
		}
	}

	public final MonitoreoContext monitoreo() throws RecognitionException {
		MonitoreoContext _localctx = new MonitoreoContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_monitoreo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(31);
			match(T__4);
			setState(32);
			sensorClima();
			setState(33);
			match(T__5);
			setState(34);
			match(NUM);
			setState(35);
			match(T__6);
			setState(36);
			match(T__7);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RespuestaContext extends ParserRuleContext {
		public SensorClimaContext sensorClima() {
			return getRuleContext(SensorClimaContext.class,0);
		}
		public TerminalNode NUM() { return getToken(ClimaParser.NUM, 0); }
		public AspectoContext aspecto() {
			return getRuleContext(AspectoContext.class,0);
		}
		public RespuestaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_respuesta; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).enterRespuesta(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).exitRespuesta(this);
		}
	}

	public final RespuestaContext respuesta() throws RecognitionException {
		RespuestaContext _localctx = new RespuestaContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_respuesta);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			match(T__8);
			setState(39);
			sensorClima();
			setState(40);
			match(T__9);
			setState(41);
			match(T__10);
			setState(42);
			match(NUM);
			setState(43);
			match(T__11);
			setState(44);
			match(T__12);
			setState(45);
			aspecto();
			setState(46);
			match(T__13);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImprimirContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(ClimaParser.STRING, 0); }
		public TerminalNode NUM() { return getToken(ClimaParser.NUM, 0); }
		public ImprimirContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_imprimir; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).enterImprimir(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).exitImprimir(this);
		}
	}

	public final ImprimirContext imprimir() throws RecognitionException {
		ImprimirContext _localctx = new ImprimirContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_imprimir);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(48);
			match(T__14);
			setState(49);
			match(STRING);
			setState(50);
			match(T__5);
			setState(51);
			match(NUM);
			setState(52);
			match(T__6);
			setState(53);
			match(T__7);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SensorClimaContext extends ParserRuleContext {
		public SensorClimaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sensorClima; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).enterSensorClima(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).exitSensorClima(this);
		}
	}

	public final SensorClimaContext sensorClima() throws RecognitionException {
		SensorClimaContext _localctx = new SensorClimaContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_sensorClima);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
			_la = _input.LA(1);
			if ( !(_la==T__15 || _la==T__16) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AspectoContext extends ParserRuleContext {
		public AspectoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aspecto; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).enterAspecto(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ClimaListener ) ((ClimaListener)listener).exitAspecto(this);
		}
	}

	public final AspectoContext aspecto() throws RecognitionException {
		AspectoContext _localctx = new AspectoContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_aspecto);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(57);
			_la = _input.LA(1);
			if ( !(_la==T__17 || _la==T__18) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0018<\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0005\u0000\u0014\b\u0000\n\u0000\f\u0000"+
		"\u0017\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0003\u0001\u001e\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0000\u0000\u0007\u0000\u0002\u0004\u0006\b\n\f\u0000\u0002"+
		"\u0001\u0000\u0010\u0011\u0001\u0000\u0012\u00137\u0000\u000e\u0001\u0000"+
		"\u0000\u0000\u0002\u001d\u0001\u0000\u0000\u0000\u0004\u001f\u0001\u0000"+
		"\u0000\u0000\u0006&\u0001\u0000\u0000\u0000\b0\u0001\u0000\u0000\u0000"+
		"\n7\u0001\u0000\u0000\u0000\f9\u0001\u0000\u0000\u0000\u000e\u000f\u0005"+
		"\u0001\u0000\u0000\u000f\u0010\u0005\u0002\u0000\u0000\u0010\u0011\u0005"+
		"\u0014\u0000\u0000\u0011\u0015\u0005\u0003\u0000\u0000\u0012\u0014\u0003"+
		"\u0002\u0001\u0000\u0013\u0012\u0001\u0000\u0000\u0000\u0014\u0017\u0001"+
		"\u0000\u0000\u0000\u0015\u0013\u0001\u0000\u0000\u0000\u0015\u0016\u0001"+
		"\u0000\u0000\u0000\u0016\u0018\u0001\u0000\u0000\u0000\u0017\u0015\u0001"+
		"\u0000\u0000\u0000\u0018\u0019\u0005\u0004\u0000\u0000\u0019\u0001\u0001"+
		"\u0000\u0000\u0000\u001a\u001e\u0003\u0004\u0002\u0000\u001b\u001e\u0003"+
		"\u0006\u0003\u0000\u001c\u001e\u0003\b\u0004\u0000\u001d\u001a\u0001\u0000"+
		"\u0000\u0000\u001d\u001b\u0001\u0000\u0000\u0000\u001d\u001c\u0001\u0000"+
		"\u0000\u0000\u001e\u0003\u0001\u0000\u0000\u0000\u001f \u0005\u0005\u0000"+
		"\u0000 !\u0003\n\u0005\u0000!\"\u0005\u0006\u0000\u0000\"#\u0005\u0015"+
		"\u0000\u0000#$\u0005\u0007\u0000\u0000$%\u0005\b\u0000\u0000%\u0005\u0001"+
		"\u0000\u0000\u0000&\'\u0005\t\u0000\u0000\'(\u0003\n\u0005\u0000()\u0005"+
		"\n\u0000\u0000)*\u0005\u000b\u0000\u0000*+\u0005\u0015\u0000\u0000+,\u0005"+
		"\f\u0000\u0000,-\u0005\r\u0000\u0000-.\u0003\f\u0006\u0000./\u0005\u000e"+
		"\u0000\u0000/\u0007\u0001\u0000\u0000\u000001\u0005\u000f\u0000\u0000"+
		"12\u0005\u0016\u0000\u000023\u0005\u0006\u0000\u000034\u0005\u0015\u0000"+
		"\u000045\u0005\u0007\u0000\u000056\u0005\b\u0000\u00006\t\u0001\u0000"+
		"\u0000\u000078\u0007\u0000\u0000\u00008\u000b\u0001\u0000\u0000\u0000"+
		"9:\u0007\u0001\u0000\u0000:\r\u0001\u0000\u0000\u0000\u0002\u0015\u001d";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}