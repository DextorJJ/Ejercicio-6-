console.log("-----Ejercicio A-----");
var cantidadDeGatos = 10

var caradegato1 = "😺"
var caradegato2 = "😸"
var caradegato3 = "😹"

for (var i = 1; i <= cantidadDeGatos; i++) {
    if (i == 1 || i == 4 || i == 7 || i == 10) {
        console.log("Gato #" + i + ":" + caradegato1)
    } else if (i == 2 || i == 5 || i == 8) {
        console.log("Gato #" + i + ":" + caradegato2)
    } else if (i == 3 || i == 6 || i == 9)
        console.log("Gato #" + i + ":" + caradegato3)
}

