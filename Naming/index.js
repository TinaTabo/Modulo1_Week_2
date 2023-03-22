var Converter = /** @class */ (function () {
    //-- Constructor
    function Converter(sentence) {
        this.sentence = sentence;
    }
    //-- Metodos
    Converter.prototype.toCamelCase = function () {
        var array = this.sentence.split(" ");
        for (var i = 0; i < array.length; i++) {
            if (i == 0) {
                array[i] = array[i][0].toLowerCase() + array[i].substring(1).toLowerCase();
            }
            if (i != 0) {
                array[i] = array[i][0].toUpperCase() + array[i].substring(1).toLowerCase();
            }
        }
        return array.join("");
    };
    Converter.prototype.toPascalCase = function () {
        var array = this.sentence.split(" ");
        for (var i = 0; i < array.length; i++) {
            array[i] = array[i][0].toUpperCase() + array[i].substring(1).toLocaleLowerCase();
        }
        return array.join("");
    };
    Converter.prototype.toSnakeCase = function () {
        var array = this.sentence.split(" ");
        for (var i = 0; i < array.length; i++) {
            array[i] = array[i].toLowerCase();
        }
        return array.join("_");
    };
    return Converter;
}());
//-- Pruebas
var nombre = new Converter("convertir string en nombre funcion");
console.log(nombre.toCamelCase());
console.log(nombre.toPascalCase());
console.log(nombre.toSnakeCase());
