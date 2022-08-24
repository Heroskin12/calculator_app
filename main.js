const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-function]');
const equal = document.querySelector('[data-equal');
const allClear = document.querySelector('[data-clear]');
const undo = document.querySelector('[data-delete]');
const firstOperandText = document.querySelector('[data-firstOperand]'); // the text area where the ongoing operations are displayed.
const currentOperandText = document.querySelector('[data-currentOperand]'); // the text area where the current input is displayed.
let result;

// What to do when a number, decimal or percentage is clicked.
numbers.forEach(button => {
    button.addEventListener('click', () => {
        if (result === 'done') {
            calculator.currentOperand = ''; 
            result = '';
        }// tells calc to overwrite an existing result string instead of adding to it.
        appendNumber(button.innerText); //adds the number to the input text.
        updateDisplay(); 
    })
});

// What to do when an operator is clicked.
operators.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperator(button.innerText); // parse the current operator.
        updateDisplay();
    })
})

// What to do when the equal button is clicked.
equal.addEventListener('click', () => {
    operate(calculator, result);
    updateDisplay();
    result = 'done'
})

// Do a full reset on calc. Only calculator.previousAnswer retains information.
allClear.addEventListener('click', () => {clear();}); 

// Delete last digit.
undo.addEventListener('click', () => {undoLast()}); //removes previous digit.

// Define calculator object.
const calculator = {
    firstOperand: '',
    currentOperator: undefined,
    currentOperand: '',
    previousAnswer: 0,
};

// Clear Function (Called on AC click)
function clear() {    
        calculator.firstOperand = '';
        calculator.currentOperand = '';
        calculator.currentOperator = '';
        result = '';
        firstOperandText.innerText = '';
        currentOperandText.innerText = '';
    };

// Delete last digit function (Called on Del click)
function undoLast() {
    calculator.currentOperand = calculator.currentOperand.toString().slice(0, -1);
    currentOperandText.innerText = calculator.currentOperand;
};

// Add number to currentOperand and currentOperandText (Called on number click)
function appendNumber(btnText) {
    if (btnText === '.' && currentOperandText.innerText.includes('.')) return; // only allow one decimal per operand.
    if (btnText === '%' && currentOperandText.innerText.includes('%')) return; // only allow one percentage symbol per operand.
    if (btnText === 'Ans') return calculator.currentOperand += calculator.previousAnswer; // Display value of previous answer instead of 'Ans'.
    if (btnText === '+/-') return calculator.currentOperand = '-'; // Display a negative sign instead of '+/-'
    calculator.currentOperand += btnText;

}

// Changes display whenever there is a change to current or first operand.
function updateDisplay() {
    currentOperandText.innerText = calculator.currentOperand;
    console.log(calculator.currentOperand);
    if (calculator.currentOperator !== undefined && calculator.firstOperand !== '') {
        firstOperandText.innerText = `${calculator.firstOperand} ${calculator.currentOperator}`;
    }
    else {
        firstOperandText.innerText = ' '; // display empty string when equal is clicked.
    }
}

// Calls the operate function and updates operator.
function chooseOperator(btnText, result) {
    if (calculator.currentOperand === "") return; // error check.
    if (calculator.firstOperand !== "") operate(calculator, result);
    calculator.currentOperator = btnText; // prepares operator for next time operate function is called.
    calculator.firstOperand = calculator.currentOperand;
    calculator.currentOperand = '';
}

// Carries out the equation.
function operate(calculator, result) {
    let firstNumber = parseFloat(calculator.firstOperand);
    if (currentOperandText.innerText.includes('%')) ifPerCent(); // prepares currentOperand if it is a percentage.
    let currentNumber = parseFloat(calculator.currentOperand);
    if (isNaN(firstNumber) || isNaN(currentNumber)) return; // does nothing if either number is invalid.
    
    switch (calculator.currentOperator) {
        case "+" : 
        result = firstNumber + currentNumber
        break

        case "-" : result = firstNumber - currentNumber
        break

        case "x" : result = firstNumber * currentNumber
        break

        case "÷" : result = firstNumber / currentNumber
        break

        case "^" : result = Math.pow(firstNumber, currentNumber);
        break

        default : return //if no match then don't do anything.
    }

    calculator.currentOperand = result;
    calculator.previousAnswer = result;
    calculator.currentOperator = undefined;    
}

// Prepares a percentage operand depending on the operator.
function ifPerCent() {
    calculator.currentOperand = calculator.currentOperand.slice(0, -1);
    switch (calculator.currentOperator) {
        case "+" :
            calculator.currentOperand = calculator.currentOperand * (calculator.firstOperand / 100);
            break;

        case "-" :
            calculator.currentOperand = calculator.currentOperand * (calculator.firstOperand / 100);
            break;

        case "x" :
            calculator.currentOperand = (1 / 100) * calculator.currentOperand;
            break;
        
        case "÷" : 
            calculator.currentOperand = (1 / 100) * calculator.currentOperand;
            break;

        case "^":
            calculator.currentOperand = (1/100) * calculator.currentOperand;
            break;
    }
}

