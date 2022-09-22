import { v4 as uuidv4 } from "uuid";
import DateHandler from "./date_handler";

export default class Todo {
  static unfinishedTasks = [];

  static completedTasks = [];

  constructor(title, project) {
    this.id = uuidv4();
    this.title = title;
    this.dueDate = DateHandler.todaysDate();
    this.project = project;
    this.completed = false;
  }

  setTitle(name) {
    this.title = name;
  }

  getTitle() {
    return this.title;
  }

  setDueDate(date) {
    this.dueDate = date;
  }

  setCompleted() {
    this.completed = true;
  }

  static deleteTask(e) {
    const taskToDelete = this.getUniqueTask(e);
    const updatedList = this.unfinishedTasks.filter((t) => t.id !== taskToDelete.id);

    this.unfinishedTasks = updatedList;
  }

  static appendToCollection(todo) {
    this.unfinishedTasks.push(todo);
  }

  static getUniqueTask(e) {
    const todos = this.unfinishedTasks;
    const task = todos.filter((t) => t.id === e.target.parentElement.dataset.id);
    return task[0];
  }
}
