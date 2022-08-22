//Turn Element objects into DOM Elements.
export function createDomElement(source) {
    let arrayOfElements = []
    source.forEach(element => {
        let el = document.createElement(element.domType);
        setElementClass(el, element);
        setElementId(el, element);
        arrayOfElements.push(el);
    });

    return arrayOfElements;
};

//Append DOM Elements to Document body.
export function appendToBody(source) {
    source.forEach(element => {
        document.body.appendChild(element);
    });
};

//Used to set a DOM elements class.
function setElementClass(target, source) {
    if (source.className === null) { return };
    return target.classList.add(source.className);
};

//Used to set a DOM elements ID.
function setElementId(target, source) {
    if (source.id === null) { return };
    return target.setAttribute('id', source.id);
};

