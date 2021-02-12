/* eslint-disable no-console */
// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM
import { add , subtract , multiply , divide } from '../utilities.js';

const firstNum = document.getElementById('first-variable');
const secondNum = document.getElementById('second-variable');
const addButton = document.getElementById('add-button');
const sumNum = document.getElementById('sum-variable');
const firstNumsub = document.getElementById('first-subvariable');
const secondNumsub = document.getElementById('second-subvariable');
const subButton = document.getElementById('sub-button');
const subNum = document.getElementById('sub-variable');
const firstNummult = document.getElementById('first-multvariable');
const secondNummult = document.getElementById('second-multvariable');
const multButton = document.getElementById('mult-button');
const multNum = document.getElementById('mult-variable');
const firstNumdiv = document.getElementById('first-divvariable');
const secondNumdiv = document.getElementById('second-divvariable');
const divButton = document.getElementById('div-button');
const divNum = document.getElementById('div-variable');

addButton.addEventListener('click', () => {
    console.log(firstNum.textContent = firstNum.value,
        secondNum.textContent = secondNum.value);
const answer = add(Number(firstNum.value), Number(secondNum.value));
sumNum.textContent = answer;
});

subButton.addEventListener('click', () => {
    console.log(firstNumsub.textContent = firstNumsub.value,
        secondNumsub.textContent = secondNumsub.value);
const answersub = subtract(Number(firstNumsub.value), Number(secondNumsub.value));
subNum.textContent = answersub;
});

multButton.addEventListener('click', () => {
    console.log(firstNummult.textContent = firstNummult.value,
        secondNummult.textContent = secondNummult.value);
const answermult = multiply(Number(firstNummult.value), Number(secondNummult.value));
multNum.textContent = answermult;
});

divButton.addEventListener('click', () => {
    console.log(firstNumdiv.textContent = firstNumdiv.value,
        secondNumdiv.textContent = secondNumdiv.value);
const answerdiv = divide(Number(firstNumdiv.value), Number(secondNumdiv.value));
divNum.textContent = answerdiv;
});
