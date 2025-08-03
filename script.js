document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask(taskText, save = true) {
        // Task creation logic...
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks.forEach(task => addTask(task, false));
    }

    function removeTask(taskText) {
        let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    addButton.addEventListener("click", () => {
        addTask(taskInput.value);
    });

    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask(taskInput.value);
        }
    });

    loadTasks(); // Load tasks on startup
});
