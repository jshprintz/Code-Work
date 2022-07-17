console.log("js works!");

//-----------------------------------------------------
//              All of the DOM pulls
//-----------------------------------------------------
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
//-----------------------------------------------------
//          Declare global variables
//-----------------------------------------------------

let newNumber = '';
let oldNumber = '';
let intNumber = [];
let runAdd = false, runMinus = false, runMulti = false, runDivide = false;
let sum = 0;

//-----------------------------------------------------
//          All of the event handlers
//-----------------------------------------------------

// Listens for button One
buttonOne.addEventListener('click', function(){
    newNumber = newNumber + '1';
    dispInput(newNumber);
});

// Listens for button Two
buttonTwo.addEventListener('click', function(){
    newNumber = newNumber + '2';
    dispInput(newNumber);
});

// Listens for button Three
buttonThree.addEventListener('click', function(){
    newNumber = newNumber + '3';
    dispInput(newNumber);
});

// Listens for button Four
buttonFour.addEventListener('click', function(){
    newNumber = newNumber + '4';
    dispInput(newNumber);
});

// Listens for button Five
buttonFive.addEventListener('click', function(){
    newNumber = newNumber + '5';
    dispInput(newNumber);
});

// Listens for button Six
buttonSix.addEventListener('click', function(){
    newNumber = newNumber + '6';
    dispInput(newNumber);
});

// Listens for button Seven
buttonSeven.addEventListener('click', function(){
    newNumber = newNumber + '7';
    dispInput(newNumber);
});

// Listens for button Eight
buttonEight.addEventListener('click', function(){
    newNumber = newNumber + '8';
    dispInput(newNumber);
});

// Listens for button Nine
buttonNine.addEventListener('click', function(){
    newNumber = newNumber + '9';
    dispInput(newNumber);
});

// Listens for button Zero
buttonZero.addEventListener('click', function(){
    newNumber = newNumber + '0';
    dispInput(newNumber);
});

// Listens for the clear button
buttonClear.addEventListener('click', function(){
    clearAll();
});

// Listens for the Add button
buttonAdd.addEventListener('click', function(){
    oldNumber = `${newNumber} + `;
    intNumber.push(Number(newNumber));
    console.log(intNumber, "Array")
    runAdd = true;
    doMath();
    runAdd = true;
});

// Listens for the Subtract button
buttonSubtract.addEventListener('click', function(){
    oldNumber = `${newNumber} - `;
    intNumber.push(Number(newNumber));
    runMinus = true;
    doMath();
    runMinus = true;
});

// Listens for the Multiply button
buttonMultiply.addEventListener('click', function(){
    oldNumber = `${newNumber} * `;
    intNumber.push(Number(newNumber));
    runMulti = true;
    doMath();
    runMulti = true;
});

// Listens for the Divide button
buttonDivide.addEventListener('click', function(){
    oldNumber = `${newNumber} / `;
    intNumber.push(Number(newNumber));
    runDivide = true;
    doMath();
    runDivide = true;
});

// Listens for the Equal button
buttonEqual.addEventListener('click', function(){
    // Pushes last number entered into array
    intNumber.push(Number(newNumber));
    doMath();
});

// Runs the math equations
function doMath(){
    if (runAdd === true){
        // Adds the numbers
            sum = 0
        for (let i=0; i<intNumber.length; i++){
            sum += intNumber[i];
            console.log(intNumber[i])
        }
        intNumber = clearNumbers(intNumber);
        runAdd = false;
    } else if (runMinus === true) {
        // Subtracts the numbers
            sum = intNumber[0]
        for (let i=1; i<intNumber.length; i++){
            sum -= intNumber[i];
        }
        intNumber = clearNumbers(intNumber);
        runMinus = false;
    } else if (runMulti === true) {
        // Multiply's the numbers
        sum = 1
        for (let i=0; i<intNumber.length; i++){
            sum *= intNumber[i];
        }
        intNumber = clearNumbers(intNumber);
        runMulti = false;
    }   else if (runDivide === true) {
        // Divide's the numbers
        sum = intNumber[0];
        for (let i=1; i<intNumber.length; i++){
            sum /= intNumber[i];
        }
        intNumber = clearNumbers(intNumber);
        runDivide = false;
    }

    // Resets for next equation
    newNumber = '';
    dispInput(newNumber);
    dispOutput(sum);
    intNumber.push(sum);
};

// Clear numbers function after equal
function clearNumbers(array){
    while(array.length>0){
        array.pop();
    }
    return array;
}

// Clears everything
function clearAll(){
    newNumber = '';
    oldNumber = '';
    dispInput(newNumber);
    dispOutput(oldNumber);
    sum = 0;
    intNumber = clearNumbers(intNumber);
};

// Display Output function
function dispOutput(dispNumber){
    displayOutput.innerText = dispNumber;
};

// Display Input function
function dispInput(dispNumber){
    displayInput.innerText = dispNumber;
};

