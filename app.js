/* eslint-disable no-console */
// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

import { add, subtract, multiply, divide } from '../utilities.js';

function initOperator(firstInputId, secondInputId, buttonId, resultsId, calculation) {
    const firstNum = document.getElementById(firstInputId);
    const secondNum = document.getElementById(secondInputId);
    const addButton = document.getElementById(buttonId);
    const sumNum = document.getElementById(resultsId);

    addButton.addEventListener('click', () => {
        console.log(firstNum.textContent = firstNum.value,
            secondNum.textContent= secondNum.value);
        const answer = calculation(Number(firstNum.value), Number(secondNum.value)); 
        sumNum.textContent = answer;
    }); 
}

initOperator('first-variable', 'second-variable', 'add-button', 'sum-variable', add);
initOperator('first-subvariable', 'second-subvariable', 'sub-button', 'sub-variable', subtract);
initOperator('first-multvariable', 'second-multvariable', 'mult-button', 'mult-variable', multiply);
initOperator('first-divvariable', 'second-divvariable', 'div-button', 'div-variable', divide);