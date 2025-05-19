// Generated from c:/Users/marqu/OneDrive/Escritorio/SSL Analizador/Clima.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link ClimaParser}.
 */
public interface ClimaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link ClimaParser#climaScript}.
	 * @param ctx the parse tree
	 */
	void enterClimaScript(ClimaParser.ClimaScriptContext ctx);
	/**
	 * Exit a parse tree produced by {@link ClimaParser#climaScript}.
	 * @param ctx the parse tree
	 */
	void exitClimaScript(ClimaParser.ClimaScriptContext ctx);
	/**
	 * Enter a parse tree produced by {@link ClimaParser#accion}.
	 * @param ctx the parse tree
	 */
	void enterAccion(ClimaParser.AccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ClimaParser#accion}.
	 * @param ctx the parse tree
	 */
	void exitAccion(ClimaParser.AccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ClimaParser#monitoreo}.
	 * @param ctx the parse tree
	 */
	void enterMonitoreo(ClimaParser.MonitoreoContext ctx);
	/**
	 * Exit a parse tree produced by {@link ClimaParser#monitoreo}.
	 * @param ctx the parse tree
	 */
	void exitMonitoreo(ClimaParser.MonitoreoContext ctx);
	/**
	 * Enter a parse tree produced by {@link ClimaParser#respuesta}.
	 * @param ctx the parse tree
	 */
	void enterRespuesta(ClimaParser.RespuestaContext ctx);
	/**
	 * Exit a parse tree produced by {@link ClimaParser#respuesta}.
	 * @param ctx the parse tree
	 */
	void exitRespuesta(ClimaParser.RespuestaContext ctx);
	/**
	 * Enter a parse tree produced by {@link ClimaParser#imprimir}.
	 * @param ctx the parse tree
	 */
	void enterImprimir(ClimaParser.ImprimirContext ctx);
	/**
	 * Exit a parse tree produced by {@link ClimaParser#imprimir}.
	 * @param ctx the parse tree
	 */
	void exitImprimir(ClimaParser.ImprimirContext ctx);
	/**
	 * Enter a parse tree produced by {@link ClimaParser#sensorClima}.
	 * @param ctx the parse tree
	 */
	void enterSensorClima(ClimaParser.SensorClimaContext ctx);
	/**
	 * Exit a parse tree produced by {@link ClimaParser#sensorClima}.
	 * @param ctx the parse tree
	 */
	void exitSensorClima(ClimaParser.SensorClimaContext ctx);
	/**
	 * Enter a parse tree produced by {@link ClimaParser#aspecto}.
	 * @param ctx the parse tree
	 */
	void enterAspecto(ClimaParser.AspectoContext ctx);
	/**
	 * Exit a parse tree produced by {@link ClimaParser#aspecto}.
	 * @param ctx the parse tree
	 */
	void exitAspecto(ClimaParser.AspectoContext ctx);
}