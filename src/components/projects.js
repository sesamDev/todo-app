import { v4 as uuidv4 } from "uuid";

export default class Project {
  static projectList = [];

  constructor(name) {
    this.name = name;
    this.id = uuidv4();
    this.todos = [];
  }

  getName() {
    return this.name;
  }

  // Static methods
  static appendToProjectList(name) {
    this.projectList.push(name);
  }

  static getProjectList() {
    return this.projectList;
  }

  static removeProject(id) {
    const updatedArray = this.projectList.filter((project) => project.id !== id);
    this.projectList = updatedArray;
  }
}
