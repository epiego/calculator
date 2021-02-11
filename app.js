// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM


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

console.log(firstNum);
console.log(secondNum);

addButton.addEventListener('click', () => {
    console.log(firstNum.textContent = firstNum.value,
        secondNum.value = secondNum.value);
const answer = Number(firstNum.value) + Number(secondNum.value); 
sumNum.textContent = answer;
});

console.log(firstNumsub);
console.log(secondNumsub);

subButton.addEventListener('click', () => {
    console.log(firstNumsub.textContent = firstNumsub.value,
        secondNumsub.value = secondNumsub.value);
const answersub = Number(firstNumsub.value) - Number(secondNumsub.value); 
subNum.textContent = answersub;
});


console.log(firstNummult);
console.log(secondNummult);

multButton.addEventListener('click', () => {
    console.log(firstNummult.textContent = firstNummult.value,
        secondNummult.value = secondNummult.value);
const answermult = Number(firstNummult.value) * Number(secondNummult.value); 
multNum.textContent = answermult;
});


console.log(firstNumdiv);
console.log(secondNumdiv);

divButton.addEventListener('click', () => {
    console.log(firstNumdiv.textContent = firstNumdiv.value,
        secondNumdiv.value = secondNumdiv.value);
const answerdiv = Number(firstNumdiv.value) / Number(secondNumdiv.value); 
console.log(answerdiv.value);
console.log()
divNum.textContent = answerdiv;
});