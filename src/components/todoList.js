let todoList = [];

export function appendTodoToList(todo) {
    return todoList.push(todo);
}

export function getTodoList() {
    return todoList;
}