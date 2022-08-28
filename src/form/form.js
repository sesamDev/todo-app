import { createTodoItem } from "../todo_item/todo_item";

//Form container
const formContainer = document.createElement('div');
formContainer.classList.add('form-container');

//Form element
const form = document.createElement('form');
form.setAttribute('id', 'todoForm');

//Form title
const formTitle = document.createElement('h2');
formTitle.innerText = 'Create task';

//Title text input
const titleTextInput = document.createElement('input');
titleTextInput.setAttribute('name', 'titleText');
titleTextInput.setAttribute('type', 'text');
titleTextInput.setAttribute('placeholder', 'Title: Example Titel');

//Description text input
const descriptionTextArea = document.createElement('textarea');
descriptionTextArea.setAttribute('name', 'textArea');
descriptionTextArea.setAttribute('rows', '4');
descriptionTextArea.setAttribute('columns', '20');
descriptionTextArea.setAttribute('placeholder', 'Description');

//Due date input
const dueDateInput = document.createElement('input');
dueDateInput.setAttribute('name', 'dueDate');
dueDateInput.setAttribute('type', 'date');

//Due date label
const dueDateLabel = document.createElement('label');
dueDateLabel.setAttribute('name', 'dueDate');
dueDateLabel.innerText = 'Due date'


//Urgency list
const urgencyList = document.createElement('input');
urgencyList.setAttribute('name', 'urgency')
urgencyList.setAttribute('list', 'urgency');
urgencyList.setAttribute('placeholder', 'Set urgency');
const urgencyDatalist = document.createElement('datalist');
urgencyDatalist.setAttribute('id', 'urgency');
const urgencyHigh = document.createElement('option');
urgencyHigh.setAttribute('value', 'High');
const urgencyNormal = document.createElement('option');
urgencyNormal.setAttribute('value', 'Normal');
const urgencyLow = document.createElement('option');
urgencyLow.setAttribute('value', 'Low');

//Submit button
const submitButton = document.createElement('input');
submitButton.setAttribute('type', 'button');
submitButton.setAttribute('id', 'submit-button');
submitButton.setAttribute('value', 'Add task');
submitButton.addEventListener('click', () => {
    const formValues = getFormValues();
    console.log(formValues.titleText);
    createTodoItem(formValues.titleText,
        formValues.textArea,
        formValues.dueDate,
        formValues.urgency,
        formValues.parentProject);
    toggleForm();


})

//Discard button
const discardButton = document.createElement('input');
discardButton.setAttribute('type', 'button');
discardButton.setAttribute('value', 'Discard task');
discardButton.addEventListener('click', toggleForm);

//Parent project list
const parentProject = document.createElement('input');
parentProject.setAttribute('name', 'parentProject')
parentProject.setAttribute('list', 'parentProject');
parentProject.setAttribute('placeholder', 'Project');
const projectDatalist = document.createElement('datalist');
projectDatalist.setAttribute('id', 'parentProject');
const phProject1 = document.createElement('option');
phProject1.setAttribute('value', 'High');
const phProject2 = document.createElement('option');
phProject2.setAttribute('value', 'Normal');
const phProject3 = document.createElement('option');
phProject3.setAttribute('value', 'Low');
//Create DOM tree
formContainer.appendChild(form);
form.append(formTitle,
    titleTextInput,
    descriptionTextArea,
    dueDateLabel,
    dueDateInput,
    urgencyList,
    urgencyDatalist,
    parentProject,
    projectDatalist,
    submitButton,
    discardButton);
urgencyDatalist.append(urgencyHigh, urgencyNormal, urgencyLow);
projectDatalist.append(phProject1, phProject2, phProject3);

//Used to clear form when toggeling it
function clearForm() {
    form.reset();
}

//Get the values entered to the form
function getFormValues() {
    let elements = document.getElementById("todoForm").elements;
    let obj = {};
    for (var i = 0; i < elements.length; i++) {
        let item = elements.item(i);
        obj[item.name] = item.value;
    }

    return obj;
}

export function toggleForm() {
    if (document.querySelector('.form-container') === null) {
        document.body.appendChild(formContainer);
    } else {
        document.body.removeChild(formContainer)
        clearForm();
    }

}
