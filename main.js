// Button Variables
const buttons = document.querySelectorAll('.number'); //All numbered & function butons.
const arrBtn = Array.from(buttons);
const clear = document.querySelector('.clear'); // C button.
const negative = document.querySelector('.negative'); // negation button
const equal = document.querySelector('.equal'); // equal button
const answer = document.querySelector('.ans');
const undo = document.querySelector('.undo');
const decimal = document.querySelector('.decimal');
const percentage = document.querySelector('.percentage');
let hasDecimal = false; // bool to determine if an operand contains a decimal.
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

// Main loop for button click.
arrBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        // When there is no input.
        if (input.innerText === "Enter a number.") {
            input.style.fontSize = '2rem'; 
            result.style.fontSize = '1rem'; // makes input bigger than result.
            result.innerText = 0; // auto-set result to 0.
                if (btn.innerText < "0" || btn.innerText > "9") {
                    return input.innerText = "ERROR"; // throws error if first button clicked is not valid.
                }
            input.innerText = btn.innerText;
            calculator.currentOperand = btn.innerText;
        }

        else if (input.innerText === "ERROR") {
            if (btn.innerText === "+" || btn.innerText === "-" || btn.innerText === "x" || btn.innerText === "/" || btn.innerText === "^") {
                input.innerText = "ERROR"; // Continue to throw error if invalid button clicked after error already displayed.
            }
        }
        
        else if (btn.innerText === "+" || btn.innerText === "-" || btn.innerText === "x" || btn.innerText === "/" || btn.innerText === "^") {
            input.innerText += btn.innerText;  
            let string3 = calculator.currentOperand;
            string3 = string3.toString();
            if (string3.indexOf("%") > 0) {
                string3 = string3.slice(0, -1);
                calculator.currentOperand = string3;
                // Calculate the percentage as a decimal.
                calculator.currentOperand = (parseFloat(calculator.currentOperand / 100));
                console.log(calculator.currentOperand);
            }          

            if (calculator.firstOperand === null) {
                // Deals with the first operator in the equation.
                calculator.firstOperand = calculator.currentOperand;
                calculator.currentOperand = "0";
                calculator.currentOperator = btn.textContent;
            }            
            else {
                if (calculator.currentOperator === "+") {
                    temp = calculator.result;
                    if (calculator.firstOperand === "Ans") {
                        calculator.firstOperand = previousAnswer;
                    }
                    let string1 = calculator.firstOperand;
                    string1 = string1.toString();
                    let string2 = calculator.currentOperand;
                    string2 = string2.toString();
                    
                    if (string1.indexOf('.') > 0 || string2.indexOf('.') > 0) {
                        calculator.result = (parseFloat(calculator.firstOperand) + parseFloat(calculator.currentOperand));
                        result.innerText = calculator.result.toFixed(6)
                        for (let i = result.innerText.length - 1; i > -1; i--) {
                            if (result.innerText[i] === "0") {
                                result.innerText = result.innerText.slice(0,-1);
                            } 
                            else {
                                break;
                            }
                        }
                    }
                    else {
                        calculator.result = parseInt(calculator.firstOperand) + parseInt(calculator.currentOperand);
                        result.innerText = calculator.result;
                    }
                    calculator.currentOperator = btn.innerText;
                    calculator.firstOperand = calculator.result;
                    calculator.currentOperand = 0;
                }
                
                else if (calculator.currentOperator === "-") {
                    temp = calculator.result;
                    if (calculator.firstOperand === "Ans") {
                        calculator.firstOperand = previousAnswer;
                    }
                    let string1 = calculator.firstOperand;
                    string1 = string1.toString();
                    let string2 = calculator.currentOperand;
                    string2 = string2.toString();
                    
                    if (string1.indexOf('.') > 0 || string2.indexOf('.') > 0) {
                        calculator.result = parseFloat(calculator.firstOperand) - parseFloat(calculator.currentOperand);
                        result.innerText = calculator.result.toFixed(6)
                        for (let i = result.innerText.length - 1; i > -1; i--) {
                            if (result.innerText[i] === "0") {
                                result.innerText = result.innerText.slice(0,-1);
                            } 
                            else {
                                break;
                            }
                        }
                    }
                    else {
                        calculator.result = parseInt(calculator.firstOperand) - parseInt(calculator.currentOperand);
                        result.innerText = calculator.result;
                    }
                    
                    calculator.currentOperator = btn.textContent;
                    calculator.firstOperand = calculator.result;
                    calculator.currentOperand = 0;
                }
                else if (calculator.currentOperator === "x") {
                    temp = calculator.result;
                    if (calculator.firstOperand === "Ans") {
                        calculator.firstOperand = previousAnswer;
                    }
                    let string1 = calculator.firstOperand;
                    string1 = string1.toString();
                    let string2 = calculator.currentOperand;
                    string2 = string2.toString();
                    
                    if (string1.indexOf('.') > 0 || string2.indexOf('.') > 0) {
                        calculator.result = parseFloat(calculator.firstOperand) * parseFloat(calculator.currentOperand);
                        result.innerText = calculator.result.toFixed(6)
                        for (let i = result.innerText.length - 1; i > -1; i--) {
                            if (result.innerText[i] === "0") {
                                result.innerText = result.innerText.slice(0,-1);
                            } 
                            else {
                                break;
                            }
                        }
                    }
                    else {
                        calculator.result = parseInt(calculator.firstOperand) * parseInt(calculator.currentOperand);
                        result.innerText = calculator.result;
                    }
                    
                    calculator.currentOperator = btn.textContent;
                    calculator.firstOperand = calculator.result;
                    calculator.currentOperand = 0;
                }
                else if (calculator.currentOperator === "/") {
                    temp = calculator.result;
                    if (calculator.firstOperand === "Ans") {
                        calculator.firstOperand = previousAnswer;
                    }
                    let string1 = calculator.firstOperand;
                    string1 = string1.toString();
                    let string2 = calculator.currentOperand;
                    string2 = string2.toString();
                    
                    if (string1.indexOf('.') > 0 || string2.indexOf('.') > 0) {
                        calculator.result = parseFloat(calculator.firstOperand) / parseFloat(calculator.currentOperand);
                        result.innerText = calculator.result.toFixed(6);
                        for (let i = result.innerText.length - 1; i > -1; i--) {
                            if (result.innerText[i] === "0") {
                                result.innerText = result.innerText.slice(0,-1);
                            } 
                            else {
                                break;
                            }
                        }
                    }
                    else {
                        calculator.result = parseInt(calculator.firstOperand) / parseInt(calculator.currentOperand);
                        result.innerText = calculator.result;
                        if (result.innerText.indexOf('.') > 0) {
                            calculator.result = parseFloat(calculator.firstOperand) / parseFloat(calculator.currentOperand);
                            result.innerText = calculator.result.toFixed(6);
                            for (let i = result.innerText.length - 1; i > -1; i--) {
                                if (result.innerText[i] === "0") {
                                    result.innerText = result.innerText.slice(0,-1);
                                } 
                                else {
                                    break;
                                }
                            }
                        }
                    }
                    calculator.currentOperator = btn.textContent;
                    calculator.firstOperand = calculator.result;
                    calculator.currentOperand = 0;
                }
                else if (calculator.currentOperator === "^") {
                    temp = calculator.result;
                    if (calculator.firstOperand === "Ans") {
                        calculator.firstOperand = previousAnswer;
                    }
                    let string1 = calculator.firstOperand;
                    string1 = string1.toString();
                    let string2 = calculator.currentOperand;
                    string2 = string2.toString();
                    

                    if (string1.indexOf('.') > 0 || string2.indexOf('.') > 0) {
                        calculator.result = Math.pow(parseFloat(calculator.firstOperand), parseFloat(calculator.currentOperand));  
                        result.innerText = calculator.result.toFixed(6)
                        for (let i = result.innerText.length - 1; i > -1; i--) {
                            if (result.innerText[i] === "0") {
                                result.innerText = result.innerText.slice(0,-1);
                            } 
                            else {
                                break;
                            }
                        }                        
                    }
                    else {
                        calculator.result = Math.pow(parseInt(calculator.firstOperand), parseInt(calculator.currentOperand));
                        result.innerText = calculator.result;
                    }
                        calculator.currentOperator = btn.textContent;
                        calculator.currentOperand = 0;
                        calculator.firstOperand = null;
                        input.style.fontSize = '1rem';
                        result.style.fontSize = '2rem';
                        input.innerText = "Enter a number."
                        previousAnswer = calculator.result;
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

decimal.addEventListener('click', function() {
    // Add decimal point to input when valid.
    if (input.innerText === "Enter a number.") {
        calculator.currentOperand = "0.";
        input.innerText = "0."
    }
    else {
        calculator.currentOperand += ".";
        input.innerText += ".";
    }
})

answer.addEventListener('click', function() {
    // Give functionality to Ans button.
    // Previous result is stored in previousAnswer variable.
    if (input.innerText === "Enter a number.") {
        input.innerText = "Ans";
        calculator.currentOperand = previousAnswer;
        input.style.fontSize = '2rem';
        result.style.fontSize = '1rem';
    }
    else {
        input.innerText += "Ans";
        calculator.currentOperand = previousAnswer;
        input.style.fontSize = '2rem';
        result.style.fontSize = '1rem';
    }
})

undo.addEventListener('click', function() {
    // Removes last symbol from input string on clicking undo.
    input.innerText = input.innerText.slice(0, -1);
    calculator.currentOperand = calculator.currentOperand.slice(0, -1);
})

clear.addEventListener('click', function() {
    // Does a full clear on all key variables in calculator object.
    input.innerText = "Enter a number.";
    previousAnswer = calculator.result;
    result.innerText = 0;
    calculator.result = 0;
    calculator.currentOperand = null;
    calculator.firstOperand = null;
    calculator.currentOperator = 0;
})

negative.addEventListener('click', function() {
    // Gives unique functionality to negation button.
    if (input.innerText === "Enter a number.") {
        input.innerText = "(-";
        calculator.currentOperand = "-";
    }
    else {
        input.innerText = input.innerText + "(-";
        calculator.currentOperand = "-";
    }
})

percentage.addEventListener('click', function() {
    if (input.innerText === "Enter a number.") {
        input.innerText = "ERROR"; // throw error if percentage clicked when no number in input.
    }
    else {
        let string1 = calculator.currentOperand;
        string1 = string1.toString();
        if (string1[0] === "%") {
            input.innerText = "ERROR"; // throws error if percentage is at beginning of operand.
        }
        else {
            input.innerText += "%";
            calculator.currentOperand += "%";            
        }
}});

equal.addEventListener('click', function() {
    let string3 = calculator.currentOperand;
    string3 = string3.toString();
    if (string3.indexOf("%") > 0) {
        // Work out the percentage as a decimal if valid.
        string3 = string3.slice(0, -1);
        calculator.currentOperand = string3;
        calculator.currentOperand = (parseFloat(calculator.currentOperand / 100));
    }
    if (calculator.currentOperator === "+") {
        if (calculator.firstOperand === "Ans") {
            calculator.firstOperand = previousAnswer;
        }
        let string1 = calculator.firstOperand;
        string1 = string1.toString();
        let string2 = calculator.currentOperand;
        string2 = string2.toString();
        
        if (string1.indexOf('.') > 0 || string2.indexOf('.') > 0) {
            // Return a float if there is a deciaml in either operand.
            calculator.result = parseFloat(calculator.firstOperand) + parseFloat(calculator.currentOperand);
            result.innerText = calculator.result.toFixed(6)
                        for (let i = result.innerText.length - 1; i > -1; i--) {
                            if (result.innerText[i] === "0") {
                                result.innerText = result.innerText.slice(0,-1);
                            } 
                            else {
                                break;
                            }
                        }
        }
        else {
            calculator.result = parseInt(calculator.firstOperand) + parseInt(calculator.currentOperand);
            result.innerText = calculator.result;
        }
        calculator.firstOperand = null; //Set to null before next equation.
        calculator.currentOperand = 0;
        input.style.fontSize = '1rem';
        result.style.fontSize = '2rem'; // Make result larger than input.
    }
    
    else if (calculator.currentOperator === "-") {
        if (calculator.firstOperand === "Ans") {
            calculator.firstOperand = previousAnswer;
        }
        let string1 = calculator.firstOperand;
        string1 = string1.toString();
        let string2 = calculator.currentOperand;
        string2 = string2.toString();
        
        if (string1.indexOf('.') > 0 || string2.indexOf('.') > 0) {
            calculator.result = parseFloat(calculator.firstOperand) - parseFloat(calculator.currentOperand);
            result.innerText = calculator.result.toFixed(6)
                        for (let i = result.innerText.length - 1; i > -1; i--) {
                            if (result.innerText[i] === "0") {
                                result.innerText = result.innerText.slice(0,-1);
                            } 
                            else {
                                break;
                            }
                        }
        }
        else {
            calculator.result = parseInt(calculator.firstOperand) - parseInt(calculator.currentOperand);
            result.innerText = calculator.result;
        }
        calculator.firstOperand = null;
        calculator.currentOperand = 0;
        input.style.fontSize = '1rem';
        result.style.fontSize = '2rem';
    }
    else if (calculator.currentOperator === "x") {
        if (calculator.firstOperand === "Ans") {
            calculator.firstOperand = previousAnswer;
        }
        let string1 = calculator.firstOperand;
        string1 = string1.toString();
        let string2 = calculator.currentOperand;
        string2 = string2.toString();
        
        if (string1.indexOf('.') > 0 || string2.indexOf('.') > 0) {
            calculator.result = parseFloat(calculator.firstOperand) * parseFloat(calculator.currentOperand);
            result.innerText = calculator.result.toFixed(6)
                        for (let i = result.innerText.length - 1; i > -1; i--) {
                            if (result.innerText[i] === "0") {
                                result.innerText = result.innerText.slice(0,-1);
                            } 
                            else {
                                break;
                            }
                        }
        }
        else {
            calculator.result = parseInt(calculator.firstOperand) * parseInt(calculator.currentOperand);
            result.innerText = calculator.result;
        }
        calculator.firstOperand = null;
        calculator.currentOperand = 0;
        input.style.fontSize = '1rem';
        result.style.fontSize = '2rem';
    }
    else if (calculator.currentOperator === "/") {
        if (calculator.firstOperand === "Ans") {
            calculator.firstOperand = previousAnswer;
        }
        let string1 = calculator.firstOperand;
        string1 = string1.toString();
        let string2 = calculator.currentOperand;
        string2 = string2.toString();
        
        if (string1.indexOf('.') > 0 || string2.indexOf('.') > 0) {
            calculator.result = parseFloat(calculator.firstOperand) / parseFloat(calculator.currentOperand);
            result.innerText = calculator.result.toFixed(6);
            for (let i = result.innerText.length - 1; i > -1; i--) {
                if (result.innerText[i] === "0") {
                    result.innerText = result.innerText.slice(0,-1);
                } 
                else {
                    break;
                }
            }
        }
        else {
            calculator.result = parseInt(calculator.firstOperand) / parseInt(calculator.currentOperand);
            result.innerText = calculator.result;
            if (result.innerText.indexOf('.') > 0) {
                calculator.result = parseFloat(calculator.firstOperand) / parseFloat(calculator.currentOperand);
                result.innerText = calculator.result.toFixed(6);
                for (let i = result.innerText.length - 1; i > -1; i--) {
                    if (result.innerText[i] === "0") {
                        result.innerText = result.innerText.slice(0,-1);
                    } 
                    else {
                        break;
                    }
                }
            }
        }
        calculator.firstOperand = null;
        calculator.currentOperand = 0;
        input.style.fontSize = '1rem';
        result.style.fontSize = '2rem';
    }
    else if (calculator.currentOperator === "^") {
        temp = calculator.result;
        if (calculator.firstOperand === "Ans") {
            calculator.firstOperand = previousAnswer;
        }
        let string1 = calculator.firstOperand;
        string1 = string1.toString();
        let string2 = calculator.currentOperand;
        string2 = string2.toString();

        if (string1.indexOf('.') > 0 || string2.indexOf('.') > 0) {
            calculator.result = Math.pow(parseFloat(calculator.firstOperand), parseFloat(calculator.currentOperand));     
            result.innerText = calculator.result.toFixed(6)
                        for (let i = result.innerText.length - 1; i > -1; i--) {
                            if (result.innerText[i] === "0") {
                                result.innerText = result.innerText.slice(0,-1);
                            } 
                            else {
                                break;
                            }
                        }                   
        }
        else {
            calculator.result = Math.pow(parseInt(calculator.firstOperand), parseInt(calculator.currentOperand));
            result.innerText = calculator.result;
        }
            calculator.firstOperand = null;
            calculator.currentOperand = 0;
            input.style.fontSize = '1rem';
            result.style.fontSize = '2rem';
    }
    input.innerText = "Enter a number."
    previousAnswer = calculator.result;
});



