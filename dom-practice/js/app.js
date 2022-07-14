console.log("JavaScript loaded!");

// Select an element of the DOM
const titleEl = document.getElementById('title');

console.log(titleEl);
console.dir(titleEl);

titleEl.innerText = 'Hello World';
titleEl.style.color = 'green';

const newEl = document.querySelector('h3');

console.log(newEl);
console.dir(newEl);

newEl.style.textAlign = 'center';

const pEl = document.querySelector('.cool');
console.log(pEl);

pEl.style.textAlign = "left";

const linkEl = document.querySelector('a');
linkEl.setAttribute('href', 'https://www.google.com');

