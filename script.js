document.addEventListener('DOMContentLoaded', () => {
    loadTasks();

    const addButton = document.getElementById('add-task-btn');  // ✅ Correct name
    const taskInput = document.getElementById('task-input');     // ✅ Correct name
    const taskList = document.getElementById('task-list');       // ✅ Correct name

    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        } else {
            alert('Please enter a task');
        }
    });
});

function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false));
}

function addTask(taskText, save = true) {
    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
        li.remove();
        removeTaskFromStorage(taskText);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}

function removeTaskFromStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}
