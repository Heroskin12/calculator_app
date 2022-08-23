const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-function]');
const equal = document.querySelector('[data-equal');
const allClear = document.querySelector('[data-clear]');
const undo = document.querySelector('[data-delete]');
const firstOperandText = document.querySelector('[data-firstOperand]'); // the text area where the ongoing operations are displayed.
const currentOperandText = document.querySelector('[data-currentOperand]'); // the text area where the current input is displayed.
let result;


numbers.forEach(button => {
    button.addEventListener('click', () => {
        if (result === 'done') calculator.currentOperand = '';
        appendNumber(button.innerText); //adds the number to the input text.
        updateDisplay();
    })
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperator(button.innerText);
        updateDisplay();
    })
})

equal.addEventListener('click', () => {
    operate(calculator, result);
    updateDisplay();
})
allClear.addEventListener('click', () => {clear();}); // resets the calculator.
undo.addEventListener('click', () => {undoLast()}); //removes previous digit.

const calculator = {
    firstOperand: '',
    currentOperator: undefined,
    currentOperand: '',
    previousAnswer: 0,
};

function clear() {    
        calculator.firstOperand = '';
        calculator.currentOperand = '';
        calculator.currentOperator = '';
        result = '';
        firstOperandText.innerText = '';
        currentOperandText.innerText = '';
    };

function undoLast() {
    calculator.currentOperand = calculator.currentOperand.toString().slice(0, -1);
    currentOperandText.innerText = calculator.currentOperand;
};

function appendNumber(btnText) {
    if (btnText === '.' && currentOperandText.innerText.includes('.')) return;
    if (btnText === '%' && currentOperandText.innerText.includes('%')) return;
    if (btnText === 'Ans') return calculator.currentOperand += calculator.previousAnswer;
    if (btnText === '+/-') return calculator.currentOperand = '-';
    calculator.currentOperand += btnText;

}

function updateDisplay() {
    currentOperandText.innerText = calculator.currentOperand;
    if (calculator.currentOperator !== undefined && calculator.firstOperand !== '') {
        firstOperandText.innerText = `${calculator.firstOperand} ${calculator.currentOperator}`;
    }
    else {
        firstOperandText.innerText = ' ';
    }
}

function chooseOperator(btnText, result) {
    if (calculator.currentOperand === "") return;
    if (calculator.firstOperand !== "") operate(calculator, result);
    calculator.currentOperator = btnText;
    calculator.firstOperand = calculator.currentOperand;
    calculator.currentOperand = '';
}

function operate(calculator, result) {
    let firstNumber = parseFloat(calculator.firstOperand);
    if (currentOperandText.innerText.includes('%')) ifPerCent();
    let currentNumber = parseFloat(calculator.currentOperand);
    if (isNaN(firstNumber) || isNaN(currentNumber)) return;
    
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
            console.log(`Current Operand : ${calculator.currentOperand}`)
            break;
        
        case "÷" : 
            calculator.currentOperand = (1 / 100) * calculator.currentOperand;
            console.log(`Current Operand : ${calculator.currentOperand}`)
            break;
    }
}