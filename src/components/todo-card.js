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
    // const itemProject = document.createElement('p');
    // itemProject.innerText = `Project: ${project}`;

    item.append(itemTitle, itemDescription, itemDueDate, itemUrgency);

    return item;
}

export function clearTodoDomItems() {
    const items = document.querySelectorAll('.todo-item');
    items.forEach(item => {
        item.remove();
    });
}