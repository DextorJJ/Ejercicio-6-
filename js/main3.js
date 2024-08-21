console.log("---------Ejercicio C---------")

/* Ejercicio c */

var cantidadDeGatos = 10;
var cantidadDePasos = 5;

for(var l=1 ; l<=cantidadDeGatos ; l++){

    var pasos = ""

    for(var z=0 ; z<=cantidadDePasos ; z++){
        pasos += "🐾"
    }

    if(l % 2 ==0){ 
        console.log("Gato #" + l + ":🐈" + "⬛" + pasos)
    }

    else{
        console.log("Gato #" + l + ":🐈" + pasos)
    }
}
