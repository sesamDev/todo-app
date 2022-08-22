import { appendToBody, createDomElement } from "./utils/dom_utils";
import generatePageContent from "./content/content";

//Create a variable to hold element info for Header, Side panel and Main content.
const siteBaseContent = generatePageContent();

//Turn base content objects to DOM elements.
//Append Header, Side panel and Main content to Document Body.
appendToBody(createDomElement(siteBaseContent));


