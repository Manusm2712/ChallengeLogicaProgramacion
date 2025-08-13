// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

//funcion para agregar amigos
function agregarAmigo(){
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === ""){
        alert("Por favor, escribe un nombre antes de añadir.");
        return;
    }

    //evitar nombres repetidos
    if (amigos.includes(nombre)){
        alert("Ese nombre ya está en la lista.")
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = ""; //Limpiar el campo
}

