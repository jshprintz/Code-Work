console.log("JavaScript loaded!");

// Select the score, and look at it's properties in the console.

const scoreEl = document.querySelector('#score');
console.dir(scoreEl);

// Write a function that's called updateScore,
// It will represent one argument representing the score
// and it will return a string that represents what should be in the scoreEl
// everytime someone scores.

//Use that function to update the innerText of the scoreEl.

function updateScore(score){
    return `Score: ${score}`;
};
scoreEl.innerText = updateScore(4);











// // Select an element of the DOM
// const titleEl = document.getElementById('title');

// console.log(titleEl);
// console.dir(titleEl);

// titleEl.innerText = 'Hello World';
// titleEl.style.color = 'green';

// const newEl = document.querySelector('h3');

// console.log(newEl);
// console.dir(newEl);

// newEl.style.textAlign = 'center';

// const pEl = document.querySelector('.cool');
// console.log(pEl);

// pEl.style.textAlign = "left";

// const linkEl = document.querySelector('a');
// linkEl.setAttribute('href', 'https://www.google.com');

const commentEls = document.querySelectorAll('.comment');
console.log(commentEls);

// // const changeText = document.querySelector('h1');
// // changeText.innerText = 'This is new text';


// // write a function that returns a random color value every time it is called.
// //Check out RGB values and Math.random
// Create random number
function randNum(){
    return Math.floor(Math.random() * 256)
};
// Create random color
function randColor(){
return `rgb(${randNum()}, ${randNum()}, ${randNum()})`;
};

// Loop through comments, changing colors

commentEls.forEach((commentEl) => {
    commentEl.style.color = randColor();
});

const bodyColor = document.querySelector('body');
bodyColor.style.backgroundColor = randColor();

