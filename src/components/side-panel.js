import { createUl } from '../utils/dom_utils'
import { setContentTitle } from './main-content';
import { getTodoList } from './todoList'
import { clearTodoDomItems, createTodoDomItem } from './todo-card';


//Doc fragment for creating the DOM tree
let fragmnt = document.createDocumentFragment();

export const PROJECTS = [];
export let active_project = '';

//Items for different menu options.
const optionAllTasks = document.createElement('li');
optionAllTasks.innerText = 'All tasks';
optionAllTasks.setAttribute('id', 'projectLi');

const optionUrgentTasks = document.createElement('li');
optionUrgentTasks.innerText = 'Urgent tasks';
optionUrgentTasks.setAttribute('id', 'projectLi');

const addProjectBtn = document.createElement('li');
addProjectBtn.setAttribute('id', 'addProjectButton');
addProjectBtn.innerText = 'Add Project';

const inputField = document.createElement('input');
inputField.setAttribute('id', 'submit_on_enter');
inputField.classList.add('hidden');
inputField.setAttribute('type', 'text');
inputField.setAttribute('name', 'q');
inputField.setAttribute('placeholder', 'Enter project name');


optionAllTasks.addEventListener('click', (e) => {
    setActiveProject(e.target.innerText);
    setContentTitle(active_project);
    renderTodos();
});
optionUrgentTasks.addEventListener('click', (e) => {
    setActiveProject(e.target.innerText);
    setContentTitle(active_project);
    renderTodos();
});


//Creating the main Side panel div
const sidePanel = document.createElement('div');
sidePanel.classList.add('side-panel');

//Creating the top list which contains the Side panels
//diffrent menu options
const topList = document.createElement('ul');
topList.append(optionAllTasks, optionUrgentTasks, addProjectBtn, inputField);

const projectList = createUl(PROJECTS);
// topList.innerHTML += '<li id="addProjectButton">Add project</li>';
// topList.innerHTML += '<li><input id="submit_on_enter" class="hidden" type="text" name="q" placeholder="Enter project name"></li>';
projectList.innerHTML += '<li><h3>Projects</h3></li>';
sidePanel.append(topList, projectList);

//Add eventlistner to add project button to create an input field when clicked on.
// const inputField = sidePanel.querySelector('#submit_on_enter');
addProjectBtn.addEventListener('click', () => {
    inputField.classList.remove('hidden');
});

//Listen to the enter key pressed when adding a new project and create the new project.
inputField.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        addToProjectArray(inputField.value);
        inputField.classList.add('hidden');
        appendProjectToDom();
        resetProjectInput();
        sidePanel.lastChild.lastChild.addEventListener('click', (e) => {
            setActiveProject(e.target.innerText);
            setContentTitle(active_project);
            renderTodos();
        });
        sidePanel.lastChild.lastChild.setAttribute('id', 'projectLi');
    };
});
//Store the entire Side panel inside of the fragment
fragmnt.appendChild(sidePanel);


function setActiveProject(target) {
    return active_project = target;
}

export function getActiveProject() {
    return active_project;
}

function addToProjectArray(name) {
    PROJECTS.push(name);
};

function appendProjectToDom() {
    const el = document.createElement('li');
    el.innerText = `${PROJECTS[PROJECTS.length - 1]}`
    return sidePanel.lastChild.appendChild(el);
}

function resetProjectInput() {
    inputField.value = "";
};

export function renderTodos() {
    clearTodoDomItems();
    const fragmnt = document.createDocumentFragment();
    const list = getTodoList();
    const active_project = getActiveProject();
    let todo = list;
    if (active_project == 'All tasks') {
        todo = list.map(todo => todo);
    } else if (active_project == 'Urgent tasks') {
        todo = list.filter(todo => todo.urgency == 'High');
    }
    else {
        todo = list.filter(todo => todo.project == active_project);
    }
    if (todo.length <= 0) { return };
    todo.forEach(t => {
        const el = createTodoDomItem(t.title, t.description, t.due_date, t.urgency)
        fragmnt.appendChild(el);
    });

    return document.querySelector('.main-content').appendChild(fragmnt);

}



//Function to be used in index.js to initialize the side panel
export function initSidePanel() {
    return document.body.appendChild(fragmnt);
}