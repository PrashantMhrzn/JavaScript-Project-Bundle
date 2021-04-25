// UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEvents();
// Load the event listners
function loadEvents() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTask);
    document.addEventListener('DOMContentLoaded', getTasks);
}

//get tasks from ls
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
        //create the li element
        const li = document.createElement('li');
        //add a class to the element
        li.className = 'collection-item';
        //create a text node and append it to li
        li.appendChild(document.createTextNode(task));
        //create a link element to append the li item to
        const link = document.createElement('a');
        //add a class to the link element
        link.className = 'delete-item secondary-content';
        //add an html icon X
        link.innerHTML = '<i class="fa fa-remove"></i>';
        //append link to li
        li.appendChild(link);
        taskList.appendChild(li);
    })
}

//Add tasks
function addTask(e) {
    if(taskInput.value === '') {
        alert('Please add a task!')
    }
    //create the li element
    const li = document.createElement('li');
    //add a class to the element
    li.className = 'collection-item';
    //create a text node and append it to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create a link element to append the li item to
    const link = document.createElement('a');
    //add a class to the link element
    link.className = 'delete-item secondary-content';
    //add an html icon X
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append link to li
    li.appendChild(link);
    taskList.appendChild(li);

    //store in local storage
    storeTask(taskInput.value);

    //clear input
    taskInput.value='';
    e.preventDefault();
}
//store tasks
function storeTask(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//remove tasks
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Aye you sure?')){
            e.target.parentElement.parentElement.remove();
            //remove form local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}
//remove from local storage
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//clear tasks button
function clearTasks(e) {
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    clearFromLocalStorage();
}

function clearFromLocalStorage() {
    localStorage.clear();
}

//filter tasks
function filterTask(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(item) {
        const content = item.firstChild.textContent;
        if(content.toLowerCase().indexOf(text) == -1) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    });
}