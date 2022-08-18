

let instrumentoMusical = 187000

// El usuario selecciona la cantidad de cuotas por prompt y ese numero se almacena en nuestr variable
let cuotasSeleccionadas = parseInt(prompt("Ingrese numero de cuotas"));
console.log("el usuario quiere:" + cuotasSeleccionadas + " cuotas.");



// El interprete primero RESUELVE la funcion, y almacena el RETORNO dentro de la variable
let costoFinal = calcularFinanciacion(instrumentoMusical, cuotasSeleccionadas);

// Muestro el costo final luego de haber calculado la financiacion
console.log("El costo final es: ", costoFinal);



function calcularFinanciacion(paramInstrumento, paramCantidadDeCuotas){
    let interes;
    console.log(interes);
    console.log("Instrumento que me dieron es: ", paramInstrumento)
    console.log("Cantidad de cuotas que medieron: ", paramCantidadDeCuotas)

    if (paramCantidadDeCuotas == 1 || paramCantidadDeCuotas == undefined){
        // Asigno el interes a la variable
        interes = 1;
    }
    else if (paramCantidadDeCuotas == 3){
        // Asigno el interes a la variable
        interes = 1.30;
    }
    else if (paramCantidadDeCuotas == 6){
        // Asigno el interes a la variable
        interes = 1.60;
    }
    else if (paramCantidadDeCuotas == 12){
        // Asigno el interes a la variable
        interes = 2.20;
    }
    else {
        // si no entro ningun if, devuelvo un error
        alert("Error, ingrese 1, 3, 6 o 12 cuotas")
        return;
    }

    // Muestro el interes, luego de haberlo asignado
    console.log("interes seleccionado: ", interes);

    // Almaceno en una variable el resultado del monto del instrumento * el % de interes.
    // 187.000 * 1.30 (ejemplo)
    let resultado = paramInstrumento * interes;

    // Muestro el resultado
    console.log("resultado: ", resultado);

    // Retorno el resultado
    return resultado;
}

