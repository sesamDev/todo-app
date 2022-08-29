import { createUl } from '../utils/dom_utils'
import { setContentTitle } from './main-content';


//Doc fragment for creating the DOM tree
let fragmnt = document.createDocumentFragment();

export const PROJECTS = [];
export let active_project = '';

//Items array to store the different menu options.
const items = ['All tasks',
    'Urgent tasks'
];


//Creating the main Side panel div
const sidePanel = document.createElement('div');
sidePanel.classList.add('side-panel');

//Creating the top list which contains the Side panels
//diffrent menu options
const topList = createUl(items);
const projectList = createUl(PROJECTS);
topList.innerHTML += '<li id="addProjectButton">Add project</li>';
topList.innerHTML += '<li><input id="submit_on_enter" class="hidden" type="text" name="q" placeholder="Enter project name"></li>';
projectList.innerHTML += '<li><h3>Projects</h3></li>';
sidePanel.append(topList, projectList);

//Add eventlistner to add project button to create an input field when clicked on.
const addProjectBtn = sidePanel.querySelector('#addProjectButton');
const inputField = sidePanel.querySelector('#submit_on_enter');
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
            console.log(e.target.innerText)
            setActiveProject(e.target.innerText);
            setContentTitle(active_project);

        });
        sidePanel.lastChild.lastChild.setAttribute('id', 'projectLi');
    };
});
//Store the entire Side panel inside of the fragment
fragmnt.appendChild(sidePanel);


function setActiveProject(target) {
    return active_project = target;
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




//Function to be used in index.js to initialize the side panel
export function initSidePanel() {
    return document.body.appendChild(fragmnt);
}