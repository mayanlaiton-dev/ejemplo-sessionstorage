// Funcion: guarda el nombre y cambia la pagina
function guardar() {
    const nombre = document.getElementById("nombre").value;
    sessionStorage.setItem("nombre", nombre); //guarda a la bodega 
    window.location.href = "pagina2.html"; //cambia la pagina
}

// Evento: al hacer clic en el boton , se ejecuta guardar
document.getElementById("btn-guardar").addEventListener("click", guardar);
