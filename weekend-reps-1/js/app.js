console.log("Javascript works");

// B
//1
let firstVariable = 'Hello World';
firstVariable = 420;
let secondVariable = firstVariable;
secondVariable = 'Im tired';
console.log(firstVariable);

//2
const yourName = 'Jason Shprintz';
console.log('Hello, my name is ' + yourName);

// C
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// D
let animal = 'fish';
animal == 'cow' ? console.log('mooooo') : console.log(`Hey! You're not a cow.`)

// E
let age = 15;
age >= 16 ? console.log(`Here are the keys`) : console.log(`Sorry, you're too young.`);

// II. Loops
// A.
for (let i=0; i < 10; i++){
    console.log(i);
};
 //B.
 for (let i=10; i <= 400; i++){
    console.log(i);
 };
 //C.
 for (let i=11; i < 4000; i=i+3){
    console.log(i);
 };

 // B.
 for (let i=0; i < 100; i++){
    (i % 2) === 0 ? console.log(i, "<-- is an evan number") : console.log(i);
 };

 // C.
 for (let i=1; i < 100; i++){
    if ((i % 5) === 0 ){
        console.log(`I found a ${i}. High five!`);
    }
    if ((i % 3) === 0 ){
        console.log(`I found a ${i}. Three is a crowd.`);
    }

 };

// D.
let bank_account = 0;
for (let i=1; 1<10; i++){
    bank_account += i;
};
console.log(bank_account);



