//Fetch data from input button
//Add it to DOM Content in HTML
//Delete From List

document.addEventListener('DOMContentLoaded', () => {
    //Event Listener for Forms
    const forms = document.querySelector('form')
    forms.addEventListener('submit', (e) => {
        e.preventDefault()
        //fetch result, pass to to a function that will build the task list
        const inputVal = e.target.taskdescription.value
        console.log(inputVal)
    
        buildTaskList(inputVal)
        //Resets the form
        forms.reset()
        
    })
})

//A function that adds the tasks to li tasks within the todo container
function buildTaskList(value){
    const li = document.createElement('li')
    li.textContent = `${value} `
    //Add Delete Buttons with event Listeners
    const btn = document.createElement('button')
    btn.textContent = 'X'
    btn.addEventListener('click', (e) => {
        deleteTask(e)
    })
    li.appendChild(btn)
    // console.log(li)

    //Append all the li tags
    const tasksContainer = document.getElementById('tasks')
    tasksContainer.appendChild(li)
    
}

//Delete Task Function
function deleteTask(e){
    e.target.parentNode.remove()
}
