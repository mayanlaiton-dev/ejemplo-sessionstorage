// Función: lee el nombre y lo muestra
function mostrarNombre() { 

    //reto 3
    const nombre = localStorage.getItem("usuario");  // lee de la bodega
    const ciudad = localStorage.getItem("ciudad");
    //reto 2
    if (nombre === null || ciudad === "") {
        document.getElementById("saludo").textContent = "No hay ningún nombre guardado.";
    } else {
        document.getElementById("saludo").textContent = "Hola, " + nombre;
    }
}
//reto 1
document.getElementById("saludo").textContent = 'Hola, ${nombre}, de ${ciudad}.';

// Función: borra el nombre y vuelve a mostrar el resultado
function borrar() {
    sessionStorage.removeItem("usuario");  // borra de la bodega
    mostrarNombre();                       // actualiza el mensaje
}




// Eventos
document.addEventListener("DOMContentLoaded", mostrarNombre);                  // al cargar la página
document.getElementById("btn-borrar").addEventListener("click", borrar);       // al hacer clic