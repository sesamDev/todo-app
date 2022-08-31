import { v4 as uuidv4 } from "uuid";

class Todo {
  constructor(title, description, due_date, urgency, project) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.due_date = due_date;
    this.urgency = urgency;
    this.project = project;
    this.completed = false;
  }
}

export function createTodo(title, description, due_date, urgency, project) {
  return new Todo(title, description, due_date, urgency, project);
}
