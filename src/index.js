import { appendToBody, createDomElement, appendToTargetClass, appendChildrenToParent } from "./utils/dom_utils";
import { createElement } from "./element/element";
import { toggleForm } from "./form/form";
import { createTodoItem } from "./todo_item/todo_item";
import './style.css'


//Create main page elements
const header = createElement('header', null, 'div', null);
const headerTitle = createElement('title', null, 'h1', 'TODO Orginazer')
const sidePanel = createElement('side-panel', null, 'div', null);
const mainContent = createElement('main-content', null, 'div', null);

//Create an array of DOM elements for header, sidepanel and main content
const mainPageElementsDOM = createDomElement(header, sidePanel, mainContent);
//Add to document.body
appendToBody(mainPageElementsDOM);

//Header title to DOM element
const headerTitleDOM = createDomElement(headerTitle);

//Append title to header
appendToTargetClass('.header', headerTitleDOM);

//Create side panel items
const topItemContainer = createElement('top-ul', null, 'ul', null);
const allTodosItem = createElement('side-panel-item', 'allTodos', 'li', "All tasks");
const urgentTodosItem = createElement('side-panel-item', 'urgentTodos', 'li', "Urgent tasks");
const addProjectButton = createElement('add-button', 'addProjectButton', 'p', 'Add Project +')

const topItemContainerDOM = createDomElement(topItemContainer);
const topItemContainerChildren = createDomElement(allTodosItem, urgentTodosItem, addProjectButton);

//---MAIN CONTENT---
//Add task button
const addTaskButton = document.createElement('button');
addTaskButton.setAttribute('id', 'addTaskButton');
addTaskButton.innerText = '+';
appendToTargetClass('.main-content', [addTaskButton]);
addTaskButton.addEventListener('click', toggleForm);

//Add side panel items to the DOM as children
appendToTargetClass('.side-panel', topItemContainerDOM);
appendToTargetClass('.top-ul', topItemContainerChildren);
