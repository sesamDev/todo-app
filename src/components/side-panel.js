import { createUl } from '../utils/dom_utils'


//Doc fragment for creating the DOM tree
let fragmnt = document.createDocumentFragment();

export const PROJECTS = [];
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
    };
});
//Store the entire Side panel inside of the fragment
fragmnt.appendChild(sidePanel);


function addToProjectArray(name) {
    PROJECTS.push(`<li>${name}</li>`);
};

function appendProjectToDom() {
    return sidePanel.lastChild.innerHTML += PROJECTS[PROJECTS.length - 1];
}

function resetProjectInput() {
    inputField.value = "";
};


//Function to be used in index.js to initialize the side panel
export function initSidePanel() {
    return document.body.appendChild(fragmnt);
}