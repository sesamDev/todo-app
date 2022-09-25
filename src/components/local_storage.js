export default class LocalStorage {
  // Save projects to storage
  static saveProjects(projects) {
    const projectsJSON = JSON.stringify(projects);
    localStorage.setItem("projects", projectsJSON);
  }

  // Save todos to storage
  static saveTodos(todos) {
    const todosJSON = JSON.stringify(todos);
    localStorage.setItem("todos", todosJSON);
  }

  // Get projects from storage
  static loadProjects() {
    const parsed = JSON.parse(localStorage.getItem("projects"));
    return parsed;
  }

  // Get todos from storage
  static loadTodos() {
    const loadedTodos = JSON.parse(localStorage.getItem("todos"));
    return loadedTodos;
  }
}
