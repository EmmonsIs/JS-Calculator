// Isaiah Emmons
// April 19th 2024
// JS Simple Calculator

// INPUT
const user = prompt('what is your full name?');
const date = prompt('whats todays date?');
const prj = prompt('what is the project name?');
const firstNum= parseInt(prompt('please enter your first number'));
const secondNum= parseInt(prompt('please enter your second number'));

// PROCESS
// additon
const add= firstNum+secondNum;
// Subtraction
const sub= firstNum-secondNum;
// Multiplication
const mult= firstNum*secondNum;
// Division
const div= firstNum/secondNum;


const stringAdd= `${firstNum} + ${secondNum} = ${add}`;
const stringSub= `${firstNum} - ${secondNum} = ${sub}`;
const stringMult= `${firstNum} * ${secondNum} = ${mult}`;
const stringDiv= `${firstNum} / ${secondNum} = ${div}`;

// OUTPUT
console.log(user);
console.log(date);
console.log(prj);

console.log(stringAdd);
console.log(stringSub);
console.log(stringMult);
console.log(stringDiv);
