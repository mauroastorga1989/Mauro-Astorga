const listaDeInstrumentos = [
    {
        nombre: "guitarra electrica",
        marca:"Gibson",
        modelo:"sg standard",
        precio:"289000$",
    },
    {
        nombre: "organo",
        marca:"yamaha",
        modelo:"psr e373",
        precio:"145000$",
    },
    {
        nombre: "guitarra española",
        marca:"la alpujarra",
        modelo:"85 kec",
        precio:"115000$",
    },
    {
        nombre: "microfono",
        marca:"shure",
        modelo:"sm 58",
        precio:"62000$",
    },


]

let accion = ""

while (accion != "SALIR"){
    accion = prompt("Ingrese COMPRAR|VER|AGREGAR|BORRAR|SALIR")
    switch (accion.toUpperCase()){
        case "COMPRAR":
            alert("estás comprando un/una:")           
            comprarInstrumento()
            break;
        case "VER":
            verInstrumento()
            break;    
        case "AGREGAR":
            agregarInstrumento()
            break;
        case "SALIR":
            break;
        case "BORRAR":
            borrarInstrumento()
            break;
        default:
            alert("ingrese una opcion valida")
        break;
    }

}
 
function comprarInstrumento(){
    let instrumentoElegido = prompt("ingrese instrumento a comprar")
    let instrumentoBuscado = listaDeInstrumentos.find((elemento)=>{
       return elemento.nombre.toLowerCase() == instrumentoElegido.toLowerCase()
    })
    
    if(instrumentoBuscado){
      console.log(instrumentoBuscado)
    }else{
      alert("No se escuntró el instrumento")
    }
  }

function verInstrumento(){
    let stock = ""
    listaDeInstrumentos.forEach((elemento)=>{
        stock += (`Nombre: ${elemento.nombre} Marca: ${elemento.marca} Modelo: ${elemento.modelo} Precio: ${elemento.precio}`)
    });
    alert(stock)
  };

function agregarInstrumento(){
    let nuevoNombre = prompt("ingresar nombre del instrumento:")
    let nuevaMarca = prompt("ingresar marca del instrumento:")
    let nuevoModelo = prompt("ingresar modelo del instrumento:")
    let nuevoPrecio = prompt("ingresar precio del instrumento:")

    const nuevoIntrumento = {
        nombre: nuevoNombre,
        marca: nuevaMarca,
        modelo: nuevoModelo,
        precio: nuevoPrecio,
    }

    const instrumentoBuscado = listaDeInstrumentos.some((intrumento)=>{

    })
    
    if(instrumentoBuscado){
        alert("El instrumento ya existe")   
    }
    else{
        listaDeInstrumentos.push(nuevoIntrumento)
    }
}

function borrarInstrumento(){
    let instrumentoElegido = prompt("ingrese instrumento a borrar")
    let result;
    listaDeInstrumentos.forEach((instrumento,indice)=>{
        if(instrumento.nombre == instrumentoElegido){
          result = indice
        }
    })
    if(result != undefined){
      listaDeInstrumentos.splice(result, 1)
          alert("Instrumento borrado")
    }else{
          alert("Error en encontrar el instrumento")
    }
    
  }

