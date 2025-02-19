console.log("El archivo app.js se ha cargado correctamente.");

let listaAmigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if(nombre) {
        listaAmigos.push(nombre);
        actualizarLista(); // Llamar funcion para mostrar la lista
        input.value = ""; //limpiar el input
        console.log(`Amigo agregado: ${nombre}`);
    } else {
        alert ("Por favor, ingresa un nombre válido.");
    }
}
    function actualizarLista(){
        let listaDiv = document.getElementById("listaAmigos");
        listaDiv.innerHTML = ""; //Limpiar la lista antes de actualizar

        if (listaAmigos.length > 0) {
            let ul = document.createElement("ul"); //Crear una lista <ul>
            listaAmigos.forEach(amigo => {
            let li = document.createElement("li");
            li.textContent = amigo;
            ul.appendChild(li);
            });
            listaDiv.appendChild (ul);
        }
    }





    function sortearAmigo() {
        if (listaAmigos.length > 1) {
          const amigoSorteado =  [Math.floor(Math.random() * listaAmigos.length)];
      
          // Muestra el GIF y el nombre del amigo
          document.getElementById("resultadoSorteo").style.display = "block";
          document.getElementById("nombreAmigo").textContent = "Tu amigo secreto es: " + amigoSorteado;
      
          // Oculta el resultado después de unos segundos (opcional)
          setTimeout(() => {
            document.getElementById("resultadoSorteo").style.display = "none";
          }, 5000); // 5000 milisegundos = 5 segundos
        } else {
          console.error("No hay suficientes nombres en la lista de amigos");
          alert("No hay suficientes nombres en la lista de amigos");
        }
        let listaDiv = document.getElementById("listaAmigos");
        listaDiv.innerHTML = ""; // Limpiar la lista de amigos 
        listaAmigos = [];
      }