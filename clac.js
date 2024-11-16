// Select the result display element
const resultDisplay = document.querySelector('.ans');
let expression = ''; // Store the expression to evaluate

// Function to append clicked button value to the expression
function appendToExpression(value) {
    expression += value;
    resultDisplay.textContent = expression;
}

// Function to clear the expression
function clearExpression() {
    expression = '';
    resultDisplay.textContent = '0';
}

// Function to calculate the expression
function calculateResult() {
    try {
        expression = eval(expression).toString();
        resultDisplay.textContent = expression;
    }
    catch (error) {
        resultDisplay.textContent = 'Error';
    }
}

// Function to handle backspace
function backspace() {
    expression = expression.slice(0, -1);
    if (expression) {
        resultDisplay.textContent = expression;
    }
    else {
        resultDisplay.textContent = '0';
    }
}

// Add event listeners to each button
const buttons = document.querySelectorAll('.buton');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        const value = buttons[i].textContent;
        if (value === 'AC') {
            clearExpression();
        }
        else if (value === '=') {
            calculateResult();
        }
        else if (value === 'backspace') {
            backspace();
        }
        else {
            appendToExpression(value);
        }
    });
}

