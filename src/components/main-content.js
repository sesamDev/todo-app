import { toggleForm } from "./form";
import { createTodo } from "./todo";
import { appendTodoToList } from "./todoList"
import { getActiveProject } from "./side-panel";

//Doc fragment for creating the DOM tree
let fragmnt = document.createDocumentFragment();

//Creating the main Side panel div
const mainContent = document.createElement('div');
mainContent.classList.add('main-content');

//Creating and adding top Text
const contentTitle = document.createElement('h2');
contentTitle.innerText = 'Welcome to TODO Organizer'
mainContent.appendChild(contentTitle);

//Add task button
const addTaskButton = document.createElement('button');
addTaskButton.setAttribute('id', 'addTaskButton');
addTaskButton.innerText = '+';
mainContent.appendChild(addTaskButton)
addTaskButton.addEventListener('click', toggleForm);

//Store the entire Main content inside of the fragment
fragmnt.appendChild(mainContent);

//Function to be used in index.js to initialize the side panel
export function initMainContent() {
    return document.body.appendChild(fragmnt);
}

export function setContentTitle(current_project) {
    return contentTitle.innerText = current_project;
}