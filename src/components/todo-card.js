import { removeTodoFromList, setTodoComplete } from "./todoList";
import { renderTodos } from "./side-panel";
export function createTodoDomItem(title, description, due_date, urgency, project) {
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
    const deleteBtn = document.createElement('p');
    deleteBtn.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
    </svg>`;
    const completedBtn = document.createElement('p');
    completedBtn.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19.78,2.2L24,6.42L8.44,22L0,13.55L4.22,9.33L8.44,13.55L19.78,2.2M19.78,5L8.44,16.36L4.22,12.19L2.81,13.55L8.44,19.17L21.19,6.42L19.78,5Z" />
    </svg>`
    completedBtn.addEventListener('click', (e) => {
        setTaskAsComplete(e);
    });
    deleteBtn.addEventListener('click', e => {
        deleteTask(e);
    })

    item.append(itemTitle, itemDescription, itemDueDate, itemUrgency, completedBtn, deleteBtn);

    return item;
}

function setTaskAsComplete(e) {
    const el = e.target.closest('div');
    setTodoComplete(el.dataset.id);
    renderTodos();

}

function deleteTask(e) {
    const el = e.target.closest('div');
    removeTodoFromList(el.dataset.id);
    renderTodos();
};

export function clearTodoDomItems() {
    const items = document.querySelectorAll('.todo-item');
    items.forEach(item => {
        item.remove();
    });
}