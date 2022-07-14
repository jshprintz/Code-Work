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

const commentEls = document.querySelectorAll('.comment');
console.log(commentEls);


// write a function that returns a random color value every time it is called.
//Check out RGB values and Math.random

function randColor(){
    return Math.floor(Math.random() * 255)
}

let rColor = randColor();
let gColor = randColor();
let bColor = randColor();

console.log(rColor, gColor, bColor);

for (let i of commentEls){
    console.log(i);
    i.style.color = "rgb(rColor, gColor, bColor";
};
