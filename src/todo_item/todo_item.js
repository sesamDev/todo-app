// const ToDo = (todo_text, todo_category) => {
//     const innerText = todo_text;
//     const category = todo_category;
//     const completed = false;
//     const className = 'todo-item';
//     const id = null;
//     const domType = 'div';

//     return { innerText, category, completed, className, id, domType };
// };

// export function createTodo(todo_text, todo_category) {
//     const t = ToDo(todo_text, todo_category);
//     return t;
// }

class Todo {
    constructor(title, description, due_date, urgency, project) {
        this.title = title;
        this.description = description;
        this.due_date = due_date;
        this.urgency = urgency;
        this.project = project;
    }

}

export function createTodoItem(title, description, due_date, urgency, project) {
    const item = document.createElement('div');
    item.classList.add('todo-item');
    const itemTitle = document.createElement('h3');
    itemTitle.innerText = title;
    const itemDescription = document.createElement('p');
    itemDescription.innerText = description;
    const itemDueDate = document.createElement('p');
    itemDueDate.innerText = `Due date: ${due_date}`;
    const itemUrgency = document.createElement('p');
    itemUrgency.innerText = `Urgency: ${urgency}`;
    const itemProject = document.createElement('p');
    itemProject.innerText = `Project: ${project}`;

    item.append(itemTitle, itemDescription, itemDueDate, itemUrgency, itemProject);

    return document.querySelector('.main-content').appendChild(item);
}

