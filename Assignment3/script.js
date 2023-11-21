/*Group Member:
Udit Gami
Gurleen Kaur
*/

// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Get references to important DOM elements
  const newTodoInput = document.getElementById("newTodo"); // Input field for new to-do items
  const todoList = document.getElementById("todoList"); // List to display to-do items
  const dingSound = new Audio("dingSound.mp3"); // Audio for the 'ding' sound

  // Function to play a click sound
  function playClickSound() {
    const clickSound = new Audio("dingSound.mp3");
    clickSound.play();
  }

  // Function to play a delete sound
  function playDeleteSound() {
    const deleteSound = new Audio("clickSound.mp3");
    deleteSound.play();
  }

  // Function to add a new to-do item to the list
  function addTodo() {
    // Get the trimmed value of the new to-do input
    const todoText = newTodoInput.value.trim();

    // Check if the input is not empty
    if (todoText !== "") {
      // Play click sound when adding a new to-do
      playClickSound();

      // Create DOM elements for the new to-do item
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      const todoLabel = document.createElement("span");
      const deleteButton = document.createElement("button");

      // Set attributes and text content for the created elements
      checkbox.type = "checkbox";
      todoLabel.textContent = todoText;
      deleteButton.textContent = "Delete";

      // Event handler for the delete button
      deleteButton.onclick = function () {
        li.classList.add("deleted");
        playDeleteSound(); // Play delete sound when clicking the delete button
        setTimeout(() => li.remove(), 500); // Remove after 500ms
      };

      // Append created elements to the list item
      li.appendChild(checkbox);
      li.appendChild(todoLabel);
      li.appendChild(deleteButton);

      // Append the list item to the to-do list
      todoList.appendChild(li);

      // Event listener for the checkbox's change event
      checkbox.addEventListener("change", function () {
        li.classList.toggle("checked", checkbox.checked);
        if (checkbox.checked) {
          dingSound.play(); // Play ding sound when checking a to-do
          li.classList.add("checked-animation");
          setTimeout(() => li.remove(), 1000); // Remove after 1000ms
        }
      });

      // Clear the input field after adding a to-do
      newTodoInput.value = "";
    }
  }

  // Expose the addTodo function to the global scope
  window.addTodo = addTodo;
});
