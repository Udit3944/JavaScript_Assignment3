document.addEventListener("DOMContentLoaded", function () {
  const newTodoInput = document.getElementById("newTodo");
  const todoList = document.getElementById("todoList");
  const dingSound = new Audio("button-09.mp3");

  function playClickSound() {
    const clickSound = new Audio("dingSound.mp3");
    clickSound.play();
  }

  function playDeleteSound() {
    const deleteSound = new Audio("clickSound.mp3");
    deleteSound.play();
  }

  function addTodo() {
    const todoText = newTodoInput.value.trim();
    if (todoText !== "") {
      playClickSound();
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      const todoLabel = document.createElement("span");
      const deleteButton = document.createElement("button");

      checkbox.type = "checkbox";
      todoLabel.textContent = todoText;
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function () {
        li.classList.add("deleted");
        playDeleteSound(); // Play delete sound when clicking the delete button
        setTimeout(() => li.remove(), 500); // Remove after 500ms
      };

      li.appendChild(checkbox);
      li.appendChild(todoLabel);
      li.appendChild(deleteButton);

      todoList.appendChild(li);

      checkbox.addEventListener("change", function () {
        li.classList.toggle("checked", checkbox.checked);
        if (checkbox.checked) {
          dingSound.play(); // Play ding sound when checking a to-do
          li.classList.add("checked-animation");
          setTimeout(() => li.remove(), 1000); // Remove after 1000ms
        }
      });

      newTodoInput.value = "";
    }
  }

  window.addTodo = addTodo;
});
