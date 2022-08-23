//Turn Element objects into DOM Elements.
export function createDomElement(...source) {
    let arrayOfElements = []
    source.forEach(element => {
        let el = document.createElement(element.domType);
        setElementClass(el, element);
        setElementId(el, element);
        setInnerText(el, element);
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

export function appendToTargetClass(target, source) {
    source.forEach(child => {
        document.querySelector(target).appendChild(child);
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

//Used to set a DOM elements Inner text
function setInnerText(target, source) {
    if (source.innerText === null) { return };
    return target.innerText = source.innerText;
}

