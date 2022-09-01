// Doc fragment for creating the DOM tree
const fragmnt = document.createDocumentFragment();

// Create main page elements
const header = document.createElement("div");
header.classList.add("header");
const headerTitle = document.createElement("h1");
headerTitle.innerText = "TODO Orginazer";
headerTitle.classList.add("title");

header.appendChild(headerTitle);

fragmnt.appendChild(header);

export function initHeader() {
  return document.body.appendChild(fragmnt);
}
