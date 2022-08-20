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