document.getElementById("addTaskBtn").addEventListener("click", function () {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Get the task from input
    const task = taskInput.value.trim();

    if (task !== "") {
        // Create a new list item
        const li = document.createElement("li");
        li.textContent = task;

        // Add a delete button to the task
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Clear the input
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
});
