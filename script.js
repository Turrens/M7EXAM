document.addEventListener("DOMContentLoaded", () => {
    const pendentsList = document.getElementById("pendents");
    const fetesList = document.getElementById("fetes");
    const newTaskInput = document.getElementById("new-task");
    const addTaskBtn = document.getElementById("add-task-btn");
  
    // Afegir una nova tasca
    addTaskBtn.addEventListener("click", () => {
      const taskText = newTaskInput.value.trim();
      if (taskText) {
        createTask(taskText, pendentsList);
        newTaskInput.value = "";
      } else {
        alert("Si us plau, escriu una tasca abans d’afegir-la.");
      }
    });
  
    // Crear una tasca amb funcionalitats d'Editar i Eliminar
    function createTask(text, list) {
      const newTask = document.createElement("li");
      newTask.classList.add("task");
      newTask.innerHTML = `
        ${text}
        <button class="edit-task">✏️</button>
        <button class="delete-task">❌</button>
      `;
  
      // Afegir funcionalitat d'Editar
      newTask.querySelector(".edit-task").addEventListener("click", () => {
        const newText = prompt("Edita la tasca:", text);
        if (newText) {
          newTask.firstChild.textContent = newText.trim();
        }
      });
  
      // Afegir funcionalitat d'Eliminar
      newTask.querySelector(".delete-task").addEventListener("click", () => {
        list.removeChild(newTask);
      });
  
      // Afegir la tasca a la llista
      list.appendChild(newTask);
    }
  
    // Mou tasques de Pendents a Fetes i viceversa
    pendentsList.addEventListener("click", (e) => {
      if (e.target && e.target.classList.contains("task")) {
        fetesList.appendChild(e.target);
      }
    });
  
    fetesList.addEventListener("click", (e) => {
      if (e.target && e.target.classList.contains("task")) {
        pendentsList.appendChild(e.target);
      }
    });
  });
  