//inet an array to store tasks
let tasks = []

//add tasks
document.getElementById('addTaskBtn').addEventListener('click', function() {
//starting text from input box
let taskInput = document.getElementById('taskInput').value
//add the task
if (taskInput){

    tasks.push('taskInput')
//clear the input
    document.getElementById('taskInput').value = ''

    displayTasks()
}
})

// function to display the tasks from array
function displayTasks (){
    //takes unordered list in HTML
    let taskList = document.getElementById('taskList')

    //clear existing task list
    taskList.innerHTML = ''

    //loop in array to create list item
    tasks.forEach((task, index) =>{
        //create a new list element
        let li = document.createElement('li')

        //list
        li.classList.add(
           'list-group=item',
           'd-flex',
           'justify-content-between',
           'align-items-center'
        )

        //set inner html of list with tasks and button
        li.innerHTML = `${task} <button class= 'btn btn-dark btn-sm' onclick='removeTask(${index})'>√</button>`

        //append new task to task list
        taskList.appendChild(li)
    })
}
//function to remove a task
function removeTask (index){
    //remove task from array
    tasks.splice(index, 1)

        //call the function
        displayTasks()
    

}