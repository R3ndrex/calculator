let operator = "";
let firstNumber = 0;
let secondNumber = 0;

const display = document.querySelector(".display");
const resultDisplay = document.querySelector(".display-result");
const buttons = document.querySelectorAll(".button");

const operators = {
    "+": function add(a, b) {
        return a + b;
    },
    "-": function subtract(a, b) {
        return a - b;
    },
    "*": function multiply(a, b) {
        return a * b;
    },
    "/": function divide(a, b) {
        return a / b;
    },
};

function showOperationResult() {
    secondNumber = Number(display.textContent);
    display.textContent = operate(operator, firstNumber, secondNumber);
    resultDisplay.textContent = `${firstNumber} ${operator} ${secondNumber} =`;
    operator = "";
    secondNumber = 0;
}

function showNumberOnDisplay(e) {
    if (display.textContent == 0) {
        display.textContent = e.target.textContent;
    } else {
        display.textContent += e.target.textContent;
    }
}

function memoryClear() {
    display.textContent = 0;
    resultDisplay.textContent = 0;
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
}

function operate(operator, firstNumber, secondNumber) {
    if (operator === "/" && secondNumber === 0) return NaN;
    let result = operators[operator](firstNumber, secondNumber);
    if (result % 1 === 0) {
        return result;
    }
    return result.toFixed(5);
}
