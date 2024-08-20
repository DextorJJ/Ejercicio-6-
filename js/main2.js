
console.log("-----Ejercicio B-----");

/* Ejercicio B */

var cantidadDeGatos = 5
var cantidadDePasos = 3

for (var j = 1; j <= cantidadDeGatos; j++) {
    var pasos = ""
    for (var k = 0; k < cantidadDePasos; k++) {
        pasos += "🐾"
    }
    console.log('Gato #' + j + ": 🐈" + pasos)
}
