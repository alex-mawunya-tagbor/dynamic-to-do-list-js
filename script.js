document.addEventListener("DOMContentLoaded", function () {
    // ✅ Use EXACT variable names as ALX checker expects
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage
    loadTasks();

    // Add new task on button click
    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
        addTask(taskText); // save = true by default
        taskInput.value = "";
    });

    // Add new task on pressing Enter
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            const taskText = taskInput.value.trim();
            if (taskText === "") {
                alert("Please enter a task.");
                return;
            }
            addTask(taskText);
            taskInput.value = "";
        }
    });
});

// Load saved tasks
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach(taskText => addTask(taskText, false));
}

// Add task to DOM and optionally save
function addTask(taskText, save = true) {
    const taskList = document.getElementById("task-list");

    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = function () {
        li.remove();
        removeTask(taskText);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    if (save) {
        const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

// Remove from Local Storage
function removeTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
