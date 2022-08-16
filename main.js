// Button Variables
const buttons = document.querySelectorAll('.number'); //All numbered & function butons.
const arrBtn = Array.from(buttons);
const clear = document.querySelector('.clear'); // C button.
const negative = document.querySelector('.negative'); // negation button
const equal = document.querySelector('.equal'); // equal button
const bracket = document.querySelector('.bracket'); // bracket button
const answer = document.querySelector('.ans');
const undo = document.querySelector('.undo');
let isBracket = false; // bool to determine the existence of an opening bracket.
let previousAnswer = NaN;
let temp;

const displayBar = document.querySelector('.display_bar');
let result = document.querySelector('.result');
let input = document.querySelector('.input');

// Calculator Object
const calculator = {
    firstOperand: null,
    currentOperator: null,
    currentOperand: 0,
    result: 0
};


arrBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        if (input.innerText === "Enter a number.") {
                if (btn.innerText < "0" || btn.innerText > "9") {
                    return input.innerText = "ERROR";
                }
            input.innerText = btn.innerText;
            calculator.currentOperand = btn.innerText;
            console.log(`currentOperand is: ${calculator.currentOperand}`);
        }
        else if (btn.innerText === "+" || btn.innerText === "-" || btn.innerText === "x" || btn.innerText === "/") {
            input.innerText += btn.innerText;            
            console.log(calculator.firstOperand);
            if (calculator.firstOperand === null) {
                calculator.firstOperand = calculator.currentOperand;
                calculator.currentOperand = "0";
                calculator.currentOperator = btn.textContent;
            }            
            else {
                if (calculator.currentOperator === "+") {
                    temp = calculator.result;
                    calculator.result = parseInt(calculator.firstOperand) + parseInt(calculator.currentOperand);
                    result.innerText = calculator.result;
                    calculator.currentOperator = btn.innerText;
                    calculator.firstOperand = calculator.result;
                    calculator.currentOperand = 0;
                }
                
                else if (calculator.currentOperator === "-") {
                    temp = calculator.result;
                    calculator.result = parseInt(calculator.firstOperand) - parseInt(calculator.currentOperand);
                    result.innerText = calculator.result;
                    calculator.currentOperator = btn.textContent;
                    calculator.firstOperand = calculator.result;
                    calculator.currentOperand = 0;
                }
                else if (calculator.currentOperator === "x") {
                    temp = calculator.result;
                    calculator.result = parseInt(calculator.firstOperand) * parseInt(calculator.currentOperand);
                    result.innerText = calculator.result;
                    calculator.currentOperator = btn.textContent;
                    calculator.firstOperand = calculator.result;
                    calculator.currentOperand = 0;
                }
                else if (calculator.currentOperator === "/") {
                    temp = calculator.result;
                    calculator.result = parseInt(calculator.firstOperand) / parseInt(calculator.currentOperand);
                    result.innerText = calculator.result;
                    calculator.currentOperator = btn.textContent;
                    calculator.firstOperand = calculator.result;
                    calculator.currentOperand = 0;
                }
            }          
        }
        else {
            input.innerText += btn.innerText;
            if (btn.innerText === "Ans") {
                calculator.currentOperand = previousAnswer;
            }
            else {
                calculator.currentOperand += btn.innerText;
            }
        }})
})

answer.addEventListener('click', function() {
    if (input.innerText === "Enter a number.") {
        input.innerText = "Ans";
    }
    else {
        input.innerText += "Ans";
    }
})

undo.addEventListener('click', function() {
    input.innerText = input.innerText.slice(0, -1);
    calculator.currentOperand = calculator.currentOperand.slice(0, -1);
})

clear.addEventListener('click', function() {
    input.innerText = "Enter a number.";
    isBracket = false;
    previousAnswer = calculator.result;
    result.innerText = 0;
    calculator.result = 0;
    calculator.currentOperand = null;
    calculator.firstOperand = null;
    calculator.currentOperator = null;
})

negative.addEventListener('click', function() {
    if (input.innerText === "0") {
        input.innerText = "";
    }
    input.innerText = input.innerText + "(-";
})

equal.addEventListener('click', function() {
    if (calculator.currentOperator === "+") {
        calculator.result = parseInt(calculator.firstOperand) + parseInt(calculator.currentOperand);
        result.innerText = calculator.result;
        calculator.firstOperand = calculator.result;
        calculator.currentOperand = 0;
    }
    
    else if (calculator.currentOperator === "-") {
        calculator.result = parseInt(calculator.firstOperand) - parseInt(calculator.currentOperand);
        result.innerText = calculator.result;
        calculator.firstOperand = calculator.result;
        calculator.currentOperand = 0;
    }
    else if (calculator.currentOperator === "x") {
        calculator.result = parseInt(calculator.firstOperand) * parseInt(calculator.currentOperand);
        result.innerText = calculator.result;
        calculator.firstOperand = calculator.result;
        calculator.currentOperand = 0;
    }
    else if (calculator.currentOperator === "/") {
        calculator.result = parseInt(calculator.firstOperand) / parseInt(calculator.currentOperand);
        result.innerText = calculator.result;
        calculator.firstOperand = calculator.result;
        calculator.currentOperand = 0;
    }
    input.innerText = "Enter a number."
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