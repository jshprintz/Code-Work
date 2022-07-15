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

function randNum(){
    return Math.floor(Math.random() * 255)
};

function randColor(){
let rColor = randNum();
let gColor = randNum();
let bColor = randNum();
let newColor = `rgb(${rColor}, ${gColor}, ${bColor})`
return newColor;
};

console.log(randColor(), "New Color")

for (let i = 0; i < commentEls.length; i++){
    randColor();
    commentEls[i].style.color = randColor();
};
