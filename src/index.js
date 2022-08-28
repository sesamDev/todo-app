import { appendToBody, createDomElement, appendToTargetClass, appendChildrenToParent } from "./utils/dom_utils";
import { createElement } from "./element/element";
import { initSidePanel } from "./side-panel/side-panel";
import { initMainContent } from "./components/main-content";
import './style.css'


//Create main page elements
const header = createElement('header', null, 'div', null);
const headerTitle = createElement('title', null, 'h1', 'TODO Orginazer')

//Create an array of DOM elements for header, sidepanel and main content
const mainPageElementsDOM = createDomElement(header);
initMainContent();
initSidePanel();

//Add to document.body
appendToBody(mainPageElementsDOM);

//Header title to DOM element
const headerTitleDOM = createDomElement(headerTitle);

//Append title to header
appendToTargetClass('.header', headerTitleDOM);


