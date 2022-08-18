const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

console.log(nombre.value);
console.log(correo.value);
console.log(telefono.value);
console.log(mensaje.value);

})

