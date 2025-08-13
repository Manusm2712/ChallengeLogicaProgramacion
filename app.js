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

//funcion mostrar lista de amigos
function mostrarLista(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML =""; //limpiar antes de volver a pintar

    amigos.forEach(amigo =>{
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//funcion para sortear amigo secreto
function sortearAmigo(){
    if (amigos.length <2){
        alert("Debes agregar al menos 2 personas para sortear.")
        return;
    }

    const indiceAleatorio = Math.floor(Math.random()*amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}