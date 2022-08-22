import { createElement } from "../element/element";

//Array to store all elements for export to index.js
const content = [];

//Create page elements
const header = createElement('header', null, 'div');
const sidePanel = createElement('side-panel', null, 'div');
const mainContent = createElement('main-content', null, 'div');


//Add content to content array for export to index.js
content.push(header);
content.push(sidePanel);
content.push(mainContent);

export default function generatePageContent() {
    return content;
};

