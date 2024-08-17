var cantidadDeGatos = 10

var CaraDeGato1 = "😺"
var CaraDeGato2 = "😸​​"
var CaraDeGato3 = "😹​"

for (var i=1 ; i<=cantidadDeGatos ; i++){


    if(i== 1 || i== 4 || i==10 ){

        console.log("Gato #" + i + ":" + CaraDeGato1)

    }

    else if(i== 2 || i== 5 || i==8){

        console.log("Gato #" + i + ":" + CaraDeGato2)

    }

    else if(i== 3 || i== 6 || i==9){

        console.log("Gato #" + i + ":" + CaraDeGato3)
    }
    
}

console.log("---------Ejercicio B---------")

/* Ejercicio b */

var cantidadDeGatos = 5;
var cantidadDePasos = 4;

for(var j=1 ; j<=cantidadDeGatos ; j++){

    var pasos = ""

    for(var z=0 ; z<=cantidadDePasos ; z++){
        pasos += "🐾"
    }

    console.log("Gato #" + j + ":🐈" + pasos)
}








