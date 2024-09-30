// Select elements
const input = document.getElementById('todoInput');
const addButton = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// Add event listener for adding a new to-do item
addButton.addEventListener('click', addTodo);

// Function to add a new to-do item
function addTodo() {
    const todoText = input.value.trim();

    if (todoText === "") {
        alert("Please enter a valid to-do item!");
        return;
    }

    // Create new list item (li)
    const li = document.createElement('li');

    // Add text to the list item
    li.textContent = todoText;

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => li.remove()); // Delete item when button clicked

    // Add completed toggle functionality
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Append delete button to the list item
    li.appendChild(deleteBtn);

    // Append the new list item to the to-do list (ul)
    todoList.appendChild(li);

    // Clear input field after adding the to-do
    input.value = '';
}

// Optional: Allow adding to-do item by pressing Enter key
input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});
