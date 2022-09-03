export default class SiteContent {
  static loadWebsite() {
    this.constructMainContent();
    this.constructButtons();
    this.appendInputField();
    this.initButtons();
  }

  // Method for creating the header so that it can be added to the site.
  static header() {
    const header = document.createElement("div");
    header.classList.add("header");
    const headerTitle = document.createElement("h1");
    headerTitle.innerText = "TODO Orginazer";
    headerTitle.classList.add("title");
    header.appendChild(headerTitle);
    return header;
  }

  // Method for creating the sidepanel so that it can be added to the site.
  static sidePanel() {
    const sidePanel = document.createElement("div");
    sidePanel.classList.add("side-panel");
    this.sidePanelButtons();
    return sidePanel;
  }

  // Method for creating the center content that will hold the tasks.
  static centerContent() {
    // Doc fragment for creating the DOM tree
    const fragmnt = document.createDocumentFragment();

    // Creating the main Side panel div
    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");

    // Creating and adding top Text that shows current active folder
    const contentTitle = document.createElement("h2");
    contentTitle.innerText = "All tasks";
    mainContent.appendChild(contentTitle);

    // Store the entire Main content inside of the fragment
    fragmnt.appendChild(mainContent);

    return fragmnt;
  }

  // Method for creating the buttons that are found on the sidepanel
  // so that it can be added to the site.
  static sidePanelButtons() {
    const allIcon = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z" />
    </svg>`;

    const todayIcon = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />
    </svg>`;

    const weekIcon = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M6 1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H6V1M5 8V19H19V8H5M7 10H17V12H7V10Z" />
    </svg>`;

    const projectIcon = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M18 13.09V10H20V13.09C19.67 13.04 19.34 13 19 13C18.66 13 18.33 13.04 18 13.09M9.5 11C9.22 11 9 11.22 9 11.5V13H15V11.5C15 11.22 14.78 11 14.5 11H9.5M21 9H3V3H21V9M19 5H5V7H19V5M6 19V10H4V21H13.35C13.13 20.37 13 19.7 13 19H6M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z" />
    </svg>`;

    const fragmnt = document.createDocumentFragment();

    const allTasksButton = document.createElement("button");
    allTasksButton.innerHTML += allIcon;
    allTasksButton.innerHTML += "All tasks";
    allTasksButton.setAttribute("class", "side-panel-button");
    allTasksButton.setAttribute("id", "allButton");

    const todayButton = document.createElement("button");
    todayButton.innerHTML += todayIcon;
    todayButton.innerHTML += "Today";
    todayButton.setAttribute("class", "side-panel-button");
    todayButton.setAttribute("id", "todayButton");

    const weekButton = document.createElement("button");
    weekButton.innerHTML += weekIcon;
    weekButton.innerHTML += "Week";
    weekButton.setAttribute("class", "side-panel-button");
    weekButton.setAttribute("id", "weekButton");

    const addProjectButton = document.createElement("button");
    addProjectButton.innerHTML += projectIcon;
    addProjectButton.innerHTML += "Add Project";
    addProjectButton.setAttribute("class", "side-panel-button");
    addProjectButton.setAttribute("id", "addProjectButton");

    fragmnt.appendChild(allTasksButton);
    fragmnt.appendChild(todayButton);
    fragmnt.appendChild(weekButton);
    fragmnt.appendChild(addProjectButton);

    return fragmnt;
  }

  // Method that creates the input field for adding new projects.
  static sidePanelInputField() {
    const inputField = document.createElement("input");
    inputField.setAttribute("id", "submit_on_enter");
    inputField.classList.add("hidden");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("placeholder", "Enter project name");

    return inputField;
  }

  // Method to join all different elements and then add it to document.
  static constructMainContent() {
    return document.body.append(this.header(), this.sidePanel(), this.centerContent());
  }

  // Method that adds buttons to the different elements.
  static constructButtons() {
    // For side panel
    this.appendToSidepanel(this.sidePanelButtons());
  }

  // Method that adds input field to side-panel
  static appendInputField() {
    this.appendToSidepanel(this.sidePanelInputField());
  }

  // Method that appends elements to side-panel.
  static appendToSidepanel(element) {
    const sidePanel = document.querySelector(".side-panel");
    return sidePanel.append(element);
  }

  // Method that attaches event listners to all buttons
  static initButtons() {
    const addProjectButton = document.getElementById("addProjectButton");
    const allButton = document.getElementById("allButton");
    const todayButton = document.getElementById("todayButton");
    const weekButton = document.getElementById("weekButton");

    addProjectButton.addEventListener("click", () => {
      this.toggleClasses("submit_on_enter", "hidden");
    });
    allButton.addEventListener("click", this.consoleLogTest);
    todayButton.addEventListener("click", this.consoleLogTest);
    weekButton.addEventListener("click", this.consoleLogTest);
  }

  static consoleLogTest() {
    return console.log("test");
  }

  // Method that takes an id and toggles provided class
  static toggleClasses(id, className) {
    const el = document.getElementById(id);
    el.classList.toggle(className);
  }
}
