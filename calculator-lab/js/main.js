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
const displayInput = document.getElementById('dispInput');
const displayOutput = document.getElementById('dispOutput');
const buttonEqual = document.getElementById('equal');

let newNumber = '';
let oldNumber = '';
let intNumber = [];
let runAdd = false, runMinus = false, runMulti = false, runDivide = false;
let sum = 0;


// All of the event handlers
buttonOne.addEventListener('click', function(){
    newNumber = newNumber + '1';
    dispInput(newNumber);
    dispOutput('');
});
buttonTwo.addEventListener('click', function(){
    newNumber = newNumber + '2';
    dispInput(newNumber);
    dispOutput('');
});
buttonThree.addEventListener('click', function(){
    newNumber = newNumber + '3';
    dispInput(newNumber);
    dispOutput('');
});
buttonFour.addEventListener('click', function(){
    newNumber = newNumber + '4';
    dispInput(newNumber);
    dispOutput('');
});
buttonFive.addEventListener('click', function(){
    newNumber = newNumber + '5';
    dispInput(newNumber);
    dispOutput('');
});
buttonSix.addEventListener('click', function(){
    newNumber = newNumber + '6';
    dispInput(newNumber);
    dispOutput('');
});
buttonSeven.addEventListener('click', function(){
    newNumber = newNumber + '7';
    dispInput(newNumber);
    dispOutput('');
});
buttonEight.addEventListener('click', function(){
    newNumber = newNumber + '8';
    dispInput(newNumber);
    dispOutput('');
});
buttonNine.addEventListener('click', function(){
    newNumber = newNumber + '9';
    dispInput(newNumber);
    dispOutput('');
});
buttonZero.addEventListener('click', function(){
    newNumber = newNumber + '0';
    dispInput(newNumber);
    dispOutput('');
});

buttonClear.addEventListener('click', function(){
    newNumber = '';
    oldNumber = '';
    dispInput(newNumber);
    dispOutput(oldNumber);
});

buttonAdd.addEventListener('click', function(){
    oldNumber = `${newNumber} + `;
    intNumber.push(Number(newNumber));
    runAdd = true;
    newNumber = '';
    dispInput(oldNumber);
    console.log(intNumber, "int number")
});
buttonEqual.addEventListener('click', function(){
    intNumber.push(Number(newNumber));
    if (runAdd = true){
        // Adds the numbers
        for (let i=0; i<intNumber.length; i++){
            sum += intNumber[i];
            console.log(sum, "sum")
        }
        intNumber = clearNumbers(intNumber);
        console.log(intNumber, "array")
        runAdd = false;
    }
    newNumber = '';
    dispInput(newNumber);
    dispOutput(sum);
    sum = 0;
});

// Clear numbers function after equal
function clearNumbers(array){
    while(array.length>0){
        array.pop();
    }
    return array;
}


// Display Output function
function dispOutput(dispNumber){
    displayOutput.innerText = dispNumber;
};

// Display Input function
function dispInput(dispNumber){
    displayInput.innerText = dispNumber;
};

