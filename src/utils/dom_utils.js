// Function to aid in creating UL's, takes an array of items.
export function createUl(items) {
  const ul = document.createElement("ul");
  for (let i = 0; i < items.length; i++) {
    ul.innerHTML += `<li>${items[i]}</li>`;
  }
  return ul;
}
