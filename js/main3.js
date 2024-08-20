/* Ejercicio C */

console.log("-----Ejercicio C-----");


var cantidadDeGatos = 10
var cantidadDePasos = 3

for (var l = 1; l <= cantidadDeGatos; l++) {
    var pasos = ""
    for (var k = 0; k < cantidadDePasos; k++) {
        pasos += "🐾"
    }
    l % 2 == 0 ? console.log('Gato #' + l + ": 🐈" + '⬛' + pasos) : console.log('Gato #' + l + ": 🐈" + pasos)
}