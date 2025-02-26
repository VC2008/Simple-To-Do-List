//inet an array to store tasks
let tasks = []

//add tasks
document.getElementById('andTaskBtn ').addEventListener('click', function() {
//starting text from input box
let taskInput = document.getElementById('taskInput').value

if (taskInput){

    tasks.push('taskInput')

    document.getElementById('taskInput').value = ''

    displayTasks()
}

})