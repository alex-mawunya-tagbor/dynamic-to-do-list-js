document.addEventListener('DOMContentLoaded', () => {
    loadTasks(); // Load saved tasks from Local Storage
    const form = document.querySelector('#task-form');
    const input = document.querySelector('#task-input');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const taskText = input.value.trim();
        if (taskText !== '') {
            addTask(taskText); // save = true by default
            input.value = '';
        }
    });
});

// Function to load tasks from Local Storage
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false));
}

// Add task to the DOM and Local Storage
function addTask(taskText, save = true) {
    const taskList = document.querySelector('#task-list');
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.addEventListener('click', () => {
        li.remove();
        removeTask(taskText); // Remove from Local Storage
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    if (save) {
        const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

// Remove task from Local Storage
function removeTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
