import { v4 as uuidv4 } from "uuid";

export default class Todo {
  static unfinishedTasks = [];

  static completedTasks = [];

  constructor(title, project) {
    this.id = uuidv4();
    this.title = title;
    this.dueDate = "2022-09-13";
    this.project = project;
    this.completed = false;
  }

  setTitle(name) {
    this.title = name;
  }

  setDuedate(date) {
    this.dueDate = date;
  }

  setCompleted() {
    this.completed = true;
  }

  static appendToCollection(todo) {
    this.unfinishedTasks.push(todo);
  }
}
