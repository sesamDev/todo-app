import Project from "./projects";
import Todo from "./todo";

export default class SiteContent {
  static activeView = "";

  static loadWebsite() {
    this.constructMainContent();
    this.constructButtons();
    this.appendInputField();
    this.constructProjectList();
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

    const createTodo = document.createElement("button");
    createTodo.innerText = "New Task";
    mainContent.appendChild(createTodo);

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

  // Method that creates a ul of projects from the project list.
  static constructProjectList() {
    const header = document.createElement("h3");
    header.innerText = "Projects";
    header.setAttribute("id", "projectHeader");

    const projects = Project.getProjectList();
    const ul = this.createUL(projects);

    this.appendToSidepanel(header);
    this.appendToSidepanel(ul);
  }

  static removeProjectButton() {
    const icon = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
    </svg>`;

    const el = document.createElement("span");
    el.innerHTML = icon;
    return el;
  }

  static renderProjectList() {
    const ul = document.querySelector(".side-panel>ul");
    this.clearProjectList(ul);
    this.updateProjectList(ul);
    this.setChildrenID(ul, "projectLi");
    this.initRemoveProjectButtons();
    this.initProjectButtons();
  }

  static setChildrenID(element, id) {
    const { children } = element;
    const array = Array.from(children);

    array.forEach((child) => child.setAttribute("id", id));
  }

  static updateProjectList(ul) {
    const projects = Project.getProjectList();

    projects.forEach((project) => {
      const li = document.createElement("li");
      li.setAttribute("data-id", project.id);
      li.innerText = project.name;
      li.appendChild(this.removeProjectButton());
      ul.appendChild(li);
    });
  }

  static clearProjectList(ul) {
    const { children } = ul;
    const array = Array.from(children);

    array.forEach((child) => child.remove());
  }

  // Util method to create an unordered list using an objects name.
  static createUL(array) {
    const ul = document.createElement("ul");

    array.forEach((item) => {
      const li = document.createElement("li");
      li.innerText = item.name;
      li.appendChild(this.removeProjectButton());
      ul.appendChild(li);
    });

    return ul;
  }

  // Method that creates the input field for adding new projects.
  static sidePanelInputField() {
    const container = document.createElement("div");
    container.setAttribute("id", "projectInput");
    container.classList.add("project-input");
    container.classList.add("hidden");

    const inputField = document.createElement("input");
    inputField.setAttribute("id", "projectInputField");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("placeholder", "Enter project name");

    const addButton = document.createElement("button");
    addButton.setAttribute("id", "projectInputAddButton");
    addButton.innerText = "Add";

    const clearButton = document.createElement("button");
    clearButton.setAttribute("id", "projectInputClearButton");
    clearButton.innerText = "Clear";

    container.append(inputField, addButton, clearButton);

    return container;
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

  // Methods that consolidates methods used in evenhandlers
  static handleProjectAddButton() {
    // Didnt work...
    this.createNewProject(this.getProjectInputFieldValue());
    this.clearProjectInputField();
    this.toggleClasses("projectInput", "hidden");
    this.renderProjectList();
  }

  static handleSidePanelButtons(e) {
    const button = e.target;
    this.setActiveView(button.innerText);
    this.setContentTitle();
  }

  // Needed since the buttons arent present when document gets loaded.
  static initRemoveProjectButtons() {
    const removeProjectButtons = document.querySelectorAll("#projectLi>span");
    removeProjectButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const targetID = e.target.parentElement.parentElement.dataset.id;
        Project.removeProject(targetID);
        this.renderProjectList();
      });
    });
  }

  // Default content title to All tasks if selected project is deleted
  static defaultContentTitle() {
    // Implement later..
  }

  static initProjectButtons() {
    const projectButtons = document.querySelectorAll("#projectLi");
    projectButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        this.setActiveView(e.target.innerText);
        this.setContentTitle();
      });
    });
  }

  // Method that attaches event listners to all buttons
  static initButtons() {
    const addProjectButton = document.getElementById("addProjectButton");
    const allButton = document.getElementById("allButton");
    const todayButton = document.getElementById("todayButton");
    const weekButton = document.getElementById("weekButton");
    const projectInputAddButton = document.getElementById("projectInputAddButton");
    const projectInputClearButton = document.getElementById("projectInputClearButton");
    const newTaskButton = document.querySelector(".main-content > button");

    addProjectButton.addEventListener("click", () => {
      this.toggleClasses("projectInput", "hidden");
    });
    allButton.addEventListener("click", (e) => {
      this.handleSidePanelButtons(e);
    });
    todayButton.addEventListener("click", (e) => {
      this.handleSidePanelButtons(e);
    });
    weekButton.addEventListener("click", (e) => {
      this.handleSidePanelButtons(e);
    });
    projectInputAddButton.addEventListener("click", () => {
      this.handleProjectAddButton();
    });
    projectInputClearButton.addEventListener("click", this.clearProjectInputField);
    newTaskButton.addEventListener("click", () => {
      this.addNewTask();
    });
    this.initRemoveProjectButtons();
    this.initProjectButtons();
  }

  static consoleLogTest() {
    return console.log("test");
  }

  // Active view shows the tasks associated with the latest clicked
  // category in side panel i.e "All tasks" or a current project
  static setActiveView(name) {
    if (name === undefined) {
      return;
    }
    this.activeView = name;
  }

  static getActiveView() {
    return this.activeView;
  }

  static getContentTitle() {
    const title = document.querySelector(".main-content>h2");
    return title.innerText;
  }

  static setContentTitle() {
    const title = document.querySelector(".main-content>h2");
    title.innerText = this.getActiveView();
  }

  // Method to take the project input fields value and creates a new project
  // instance.
  static createNewProject(name) {
    const project = new Project(name);
    this.appendToProjectArray(project);
  }

  // Method to access the Project class and append a new project intance
  // to it's project array.
  static appendToProjectArray(project) {
    Project.appendToProjectList(project);
  }

  // Method to clear the value of Input Field when the clear button is pressed.
  static clearProjectInputField() {
    const input = document.getElementById("projectInputField");
    input.value = "";
  }

  // Method to acces to project input fields value
  static getProjectInputFieldValue() {
    const input = document.getElementById("projectInputField");
    if (input.value === "") {
      return;
    }
    // eslint-disable-next-line consistent-return
    return input.value;
  }

  // Method that takes an id and toggles provided class
  static toggleClasses(id, className) {
    const el = document.getElementById(id);
    el.classList.toggle(className);
  }

  // Render main content when needed
  static addNewTask() {
    this.createTask();
    this.renderMainContent();
  }

  // Create new todos
  static createTask() {
    const task = new Todo("Untitled", this.activeView);
    Todo.appendToCollection(task);
  }

  static renderMainContent() {
    this.clearMainContent();
    this.renderTodos();
  }

  static getMainContentTasks() {
    const tasks = document.querySelectorAll("#task");
    return tasks;
  }

  static clearMainContent() {
    const array = this.getMainContentTasks();

    array.forEach((child) => child.remove());
  }

  static renderTodos() {
    const mainContent = document.querySelector(".main-content");
    mainContent.append(this.createDOMElementsFromTodos());
    this.taskEventListeners();
  }

  static taskEventListeners() {
    const taskTitle = document.querySelectorAll("#task>h3");
    const taskDate = document.querySelectorAll("#task>p");
    taskTitle.forEach((t) => {
      t.addEventListener("click", this.consoleLogTest);
    });
    taskDate.forEach((t) => {
      t.addEventListener("click", this.consoleLogTest);
    });
  }

  static createDOMElementsFromTodos() {
    const fragmnt = document.createDocumentFragment();
    Todo.unfinishedTasks.forEach((task) => {
      // Main div
      const el = document.createElement("div");
      el.setAttribute("id", "task");

      // Check completed
      const completed = document.createElement("Input");
      completed.setAttribute("type", "checkbox");
      el.appendChild(completed);

      // Set the title
      const title = document.createElement("h3");
      title.innerText = task.title;
      el.appendChild(title);

      // Set the due date
      const dueDate = document.createElement("p");
      dueDate.innerText = task.dueDate;
      el.appendChild(dueDate);

      // Append all to fragmnt
      fragmnt.appendChild(el);
    });
    return fragmnt;
  }
}
