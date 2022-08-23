//Element factory to create base objects that later turns into elements for site.
const Element = (class_name, _id, dom_type, inner_text) => {
    const className = class_name;
    const id = _id;
    const domType = dom_type;
    const innerText = inner_text;

    return { className, id, domType, innerText };
};

//Function to create elements and
export function createElement(class_name, id, dom_type, inner_text) {
    return Element(class_name, id, dom_type, inner_text);
}
