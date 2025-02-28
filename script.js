// Initialize an array to store tasks
let tasks = []
let taskNum = 0

document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    let taskInput = document.getElementById('taskInput').value;

    if (taskInput) {
        tasks.push(taskInput);
        document.getElementById('taskInput').value = '';
        displayTasks();
taskNum ++
plus()
    }
}




// Function to display the tasks[] array in the UL
function displayTasks() {
    // Select the unordered list (taskList) in the HTML
    let taskList = document.getElementById('taskList')

    // Clear the existing task list before updating it
    taskList.innerHTML = ''

    // Loop through each task in the array and create a list item
    tasks.forEach((task, index) => {
        // Create a new <li> element for each task
        let li = document.createElement('li')

        // Add Bootstrap classes for styling
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        )

        //Set the inner HTML of the <li> element with task text and a remove button
        li.innerHTML = `${task} <button class='btn btn-dark btn-sm' onclick='removeTask(${index})'>√</button>`

        // Append the new task to the task list
        taskList.appendChild(li)
    })
}

// Function to remove a task from the list when the "√" button is clicked
function removeTask(index) {
    // Remove the task at the given index from the array
    tasks.splice(index, 1)

    // Call the function to update the task list display
    displayTasks()
    minus()

}

//Add event listener for clear
document.getElementById('clearTaskBtn').addEventListener('click', function() {
    //Empty all tasks
    tasks = []
    //Display cleared list
    displayTasks()
    minus()

})


function plus() {
    let taskNumElement = document.getElementById('taskNum');
    let taskNum = parseInt(taskNumElement.textContent) || 0; // Get current number, default to 0 if empty
    taskNum++; // Increment the number
    taskNumElement.textContent = taskNum; // Update the element's text
}


function minus() {
    let taskNumElement = document.getElementById('taskNum');
    let taskNum = parseInt(taskNumElement.textContent) || 0; // Get current number, default to 0 if empty
    taskNum--; // Increment the number
    taskNumElement.textContent = taskNum; // Update the element's text
}