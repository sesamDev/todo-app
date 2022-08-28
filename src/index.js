import { appendToBody, createDomElement, appendToTargetClass, appendChildrenToParent } from "./utils/dom_utils";
import { createElement } from "./element/element";
import { toggleForm } from "./form/form";
import { createTodoItem } from "./todo_item/todo_item";
import { initSidePanel } from "./side-panel/side-panel";
import './style.css'


//Create main page elements
const header = createElement('header', null, 'div', null);
const headerTitle = createElement('title', null, 'h1', 'TODO Orginazer')
//const sidePanel = createElement('side-panel', null, 'div', null);
const mainContent = createElement('main-content', null, 'div', null);

//Create an array of DOM elements for header, sidepanel and main content
//const mainPageElementsDOM = createDomElement(header, sidePanel, mainContent);
const mainPageElementsDOM = createDomElement(header, mainContent);
initSidePanel();

//Add to document.body
appendToBody(mainPageElementsDOM);

//Header title to DOM element
const headerTitleDOM = createDomElement(headerTitle);

//Append title to header
appendToTargetClass('.header', headerTitleDOM);

//### MAIN CONTENT
//Add task button
const addTaskButton = document.createElement('button');
addTaskButton.setAttribute('id', 'addTaskButton');
addTaskButton.innerText = '+';
appendToTargetClass('.main-content', [addTaskButton]);
addTaskButton.addEventListener('click', toggleForm);

