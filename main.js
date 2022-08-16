// Button Variables
const buttons = document.querySelectorAll('.number'); //All numbered & function butons.
const arrBtn = Array.from(buttons);
const clear = document.querySelector('.clear'); // C button.
const negative = document.querySelector('.negative'); // negation button
const equal = document.querySelector('.equal'); // equal button
const bracket = document.querySelector('.bracket'); // bracket button
let isBracket = false; // bool to determine the existence of an opening bracket.

const displayBar = document.querySelector('.display_bar');
let result = document.querySelector('.result');
let input = document.querySelector('.input');

// Calculator Object
const calculator = {
    firstOperand: null,
    currentOperator: null,
    currentOperand: null
};


arrBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        if (input.innerText === "0") {
            if (btn.innerText < "0" || btn.innerText > "9") {
                return input.innerText = "ERROR";
            }
            input.innerText = btn.innerText;
            calculator.currentOperand = input.innerText;
        }
        else if (btn.innerText === "+" || btn.innerText === "-" || btn.innerText === "x" || btn.innerText === "/") {
            input.innerText = input.innerText + btn.innerText;
            calculator.currentOperator = btn.innerText;
            console.log(`Current Operator is ${calculator.currentOperator}`);
        }
        else {
            input.innerText = input.innerText + btn.innerText;
            calculator.firstOperand = `${calculator.firstOperand} + ${calculator.currentOperand}`;
            calculator.currentOperand = input.innerText;
    }})
})

clear.addEventListener('click', function() {
    input.innerText = "0";
    isBracket = false;
})

negative.addEventListener('click', function() {
    if (input.innerText === "0") {
        input.innerText = "";
    }
    input.innerText = input.innerText + "(-";
})

equal.addEventListener('click', function() {
    calculate(input);

});

bracket.addEventListener('click', function() {
    if (isBracket === false) {
        if (input.innerText === "0") {
            input.innerText = "";
            input.innerText = input.innerText + "(";
            isBracket = true;
        }
    }
    else {
        input.innerText = input.innerText + ")";
        isBracket = false;
    }
});

function calculate(input) {
    let sum = input.innerText;
    let arrNum
}