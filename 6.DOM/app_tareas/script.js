let input = document.querySelector("#texto");  // El id del campo de entrada
let button = document.querySelector("#btn-agregar");  // El id del botón
let ul = document.querySelector("#lista_tarea");  // El id de la lista desordenada (ul)

button.addEventListener("click", () => {  // Evento "click" para agregar tarea
    let li = document.createElement("li");  // Crear un nuevo elemento de lista
    li.textContent = input.value;  // Asignar el valor del input al contenido del li
    
    // Crear un botón de eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("eliminar");

    // Agregar el botón de eliminar al lado de la tarea
    btnEliminar.addEventListener("click", () => {
        ul.removeChild(li);  // Eliminar el li cuando se haga clic en el botón
    });

    // Agregar el botón de eliminar al li
    li.appendChild(btnEliminar);
    ul.appendChild(li);  // Agregar el li con el botón a la lista
    
    input.value = "";  // Limpiar el campo de entrada después de agregar la tarea
});
