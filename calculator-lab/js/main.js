console.log("js works!");

// all of the DOM pulls
const buttonOne = document.getElementById('one');
const buttonTwo = document.getElementById('two');
const buttonThree = document.getElementById('three');
const buttonFour = document.getElementById('four');
const buttonFive = document.getElementById('five');
const buttonSix = document.getElementById('six');
const buttonSeven = document.getElementById('seven');
const buttonEight = document.getElementById('eight');
const buttonNine = document.getElementById('nine');
const buttonZero = document.getElementById('zero');
const buttonAdd = document.getElementById('plus');
const buttonSubtract = document.getElementById('minus');
const buttonMultiply = document.getElementById('multiply');
const buttonDivide = document.getElementById('divide');
const buttonClear = document.getElementById('clear');
const displayInput = document.getElementById('input');
const displayOutput = document.getElementById('output')

let newNumber = '';


// All of the event handlers
buttonOne.addEventListener('click', function(){
    newNumber = newNumber + '1';
    dispInput('20px');
});
buttonTwo.addEventListener('click', function(){
    newNumber = newNumber + '2';
    dispInput('20px');
});
buttonThree.addEventListener('click', function(){
    newNumber = newNumber + '3';
    dispInput('20px');
});
buttonFour.addEventListener('click', function(){
    newNumber = newNumber + '4';
    dispInput('20px');
});
buttonFive.addEventListener('click', function(){
    newNumber = newNumber + '5';
    dispInput('20px');
});
buttonSix.addEventListener('click', function(){
    newNumber = newNumber + '6';
    dispInput('20px');
});
buttonSeven.addEventListener('click', function(){
    newNumber = newNumber + '7';
    dispInput('20px');
});
buttonEight.addEventListener('click', function(){
    newNumber = newNumber + '8';
    dispInput('20px');
});
buttonNine.addEventListener('click', function(){
    newNumber = newNumber + '9';
    dispInput('20px');
});
buttonZero.addEventListener('click', function(){
    newNumber = newNumber + '0';
    dispInput('20px');
});

buttonClear.addEventListener('click', function(){
    newNumber = '';
    dispInput('34px');
});




// Display Input function
function dispInput(padPX){
    displayInput.style.padding = padPX;
    displayInput.innerText = newNumber
};

// Add function
function addition(firstNum){
    let sum = firstNum
    return sum;
};

// Subtract function
function subtraction(firstNum){
    let sum = firstNum
    return sum;
};

// Multiplication function
function multiply(firstNum){
    let sum = firstNum
    return sum;
};

// Divide function
function divide(firstNum){
    let sum = firstNum
    return sum;
};

// Equals function
function equals(firstNum){
    let sum = firstNum
    return sum;
};
