// Select DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Event Listener for form submission
todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    addTodo();
});

function addTodo() {
    // Get the input value
    const todoText = todoInput.value.trim();
    
    // Check if input is empty
    if (todoText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create list item
    const li = document.createElement('li');
    
    // Create span to hold the todo text
    const span = document.createElement('span');
    span.classList.add('todo-item');
    span.textContent = todoText;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    // Append span and delete button to list item
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Append list item to the list
    todoList.appendChild(li);

    // Clear input field
    todoInput.value = '';
}

// Dark mode toggle
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
