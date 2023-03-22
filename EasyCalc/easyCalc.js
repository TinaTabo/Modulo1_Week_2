"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EasyCalc = void 0;
var EasyCalc = /** @class */ (function () {
    //-- Constructor
    function EasyCalc() {
        EasyCalc.resultado = 0;
        EasyCalc.historial = [];
        EasyCalc.formatos = [];
    }
    //-- Métodos privados
    EasyCalc.binario = function (num) {
        return num.toString(2);
    };
    EasyCalc.ASCII = function (num) {
        var string = num.toString();
        var ascii = "";
        for (var i = 0; i < string.length; i++) {
            ascii += string.charCodeAt(i) + " ";
        }
        return ascii;
    };
    EasyCalc.hexadecimal = function (num) {
        return num.toString(16);
    };
    EasyCalc.notCientifica = function (num) {
        return num.toExponential();
    };
    //-- Si cambia el valor de resultado, se modifica el valor de historial y formatos.
    EasyCalc.actualizarHistorial = function (historial, valor) {
        historial.push(valor);
        EasyCalc.setHistorial(historial);
    };
    EasyCalc.actualizarFormatos = function (valor) {
        var formatos = [
            "Binario: ".concat(EasyCalc.binario(valor)),
            "ASCII: ".concat(EasyCalc.ASCII(valor)),
            "Hexadecimal: ".concat(EasyCalc.hexadecimal(valor)),
            "Notaci\u00F3n Cient\u00EDfica: ".concat(EasyCalc.notCientifica(valor))
        ];
        EasyCalc.setFormatos(formatos);
    };
    //-- Métodos públicos
    //-- getters y setters
    EasyCalc.getResultado = function () {
        return EasyCalc.resultado;
    };
    EasyCalc.setResultado = function (resultado) {
        EasyCalc.resultado = resultado;
    };
    EasyCalc.getHistorial = function () {
        return EasyCalc.historial;
    };
    EasyCalc.setHistorial = function (historial) {
        EasyCalc.historial = historial;
    };
    EasyCalc.getFormatos = function () {
        return EasyCalc.formatos;
    };
    EasyCalc.setFormatos = function (formatos) {
        EasyCalc.formatos = formatos;
    };
    //-- Metodos de la calculadora
    EasyCalc.suma = function (numeros) {
        var suma = 0;
        for (var i = 0; i < numeros.length; i++) {
            suma += numeros[i];
        }
        EasyCalc.setResultado(suma);
        EasyCalc.actualizarHistorial(EasyCalc.historial, suma);
        EasyCalc.actualizarFormatos(suma);
    };
    EasyCalc.resta = function (numeros) {
        var resta = numeros[0];
        for (var i = 1; i < numeros.length; i++) {
            resta -= numeros[i];
        }
        EasyCalc.setResultado(resta);
        EasyCalc.actualizarHistorial(EasyCalc.historial, resta);
        EasyCalc.actualizarFormatos(resta);
    };
    EasyCalc.multiplicacion = function (numeros) {
        var multi = 1;
        for (var i = 0; i < numeros.length; i++) {
            multi *= numeros[i];
        }
        EasyCalc.setResultado(multi);
        EasyCalc.actualizarHistorial(EasyCalc.historial, multi);
        EasyCalc.actualizarFormatos(multi);
    };
    EasyCalc.division = function (numeros) {
        var div = numeros[0];
        console.log(div);
        for (var i = 1; i < numeros.length; i++) {
            div /= numeros[i];
        }
        EasyCalc.setResultado(div);
        EasyCalc.actualizarHistorial(EasyCalc.historial, div);
        EasyCalc.actualizarFormatos(div);
    };
    //-- Metodo para inicializar de nuevo todos los atributos.
    EasyCalc.resetear = function () {
        EasyCalc.setResultado(0);
        EasyCalc.setHistorial([]);
        EasyCalc.setFormatos([]);
    };
    return EasyCalc;
}());
exports.EasyCalc = EasyCalc;
