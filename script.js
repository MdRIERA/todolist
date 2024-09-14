// Función para añadir tareas
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value;

    if (taskValue === "") {
        alert("Escribe una tarea antes de añadir.");
        return;
    }

    const taskList = document.getElementById("taskList");

    // Crear un nuevo elemento de lista
    const li = document.createElement("li");
    li.textContent = taskValue;

    // Crear el botón de eliminar con un ícono de Font Awesome
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    // Añadir evento para marcar la tarea como completada
    li.onclick = function() {
        li.classList.toggle("done");
    };

    // Evitar que el clic en el botón de borrar marque la tarea como hecha
    deleteButton.onclick = function(event) {
        event.stopPropagation(); // Evita la propagación del evento de clic
        taskList.removeChild(li); // Elimina la tarea
    };

    // Agregar el botón de eliminar al elemento de la lista
    li.appendChild(deleteButton);

    // Añadir la nueva tarea a la lista
    taskList.appendChild(li);

    // Limpiar el campo de entrada
    taskInput.value = "";
}
