// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = new Set();

document.querySelector(".button-add").addEventListener("click", () => {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (!nombre) {
        alert("Debes ingresar un nombre.");
        return;
    }
    
    if (amigos.has(nombre)) {
        alert("Este nombre ya fue agregado");
        return;
    }

    amigos.add(nombre);
    input.value = "";
    input.focus();
    actualizarLista();
});

document.querySelector(".button-draw").addEventListener("click", () => {
    if (amigos.size === 0) {
        alert("No hay amigos para sortear, ingresa los nombres de tus amigos.");
        return;
    }
    
    const listaAmigos = Array.from(amigos);
    const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    
    document.getElementById("resultado").textContent = `El amigo sorteado es: ${amigoSorteado}`;
    amigos.clear();
    actualizarLista();
});

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach(nombre => {
        const item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
    });
}
