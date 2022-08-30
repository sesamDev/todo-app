class Todo {
    constructor(title, description, due_date, urgency, project) {
        this.title = title;
        this.description = description;
        this.due_date = due_date;
        this.urgency = urgency;
        this.project = project;
    }

}

export function createTodo(title, description, due_date, urgency, project) {
    return new Todo(title, description, due_date, urgency, project);
}