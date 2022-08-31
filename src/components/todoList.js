let todoList = [];

export function appendTodoToList(todo) {
  return todoList.push(todo);
}

export function getTodoList() {
  return todoList;
}

export function removeTodoFromList(target_id) {
  const todoToDelete = todoList.findIndex((todo) => todo.id == target_id);
  todoList.splice(todoToDelete, 1);
}

export function setTodoComplete(target_id) {
  const index = todoList.findIndex((todo) => todo.id == target_id);
  todoList[index].completed = true;
  console.log(todoList);
}
