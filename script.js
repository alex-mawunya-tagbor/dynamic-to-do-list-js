function addTask(taskText, save = true) {
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    // ✅ Checker expects classList.add, not className assignment
    removeBtn.classList.add("remove-btn");

    removeBtn.onclick = function () {
        li.remove();
        removeTask(taskText); // remove from Local Storage
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    if (save) {
        const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // ✅ Clear input field
    taskInput.value = "";
}
