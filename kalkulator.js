let currentInput = '0';
let previousInput = '';
let operator = null;
let shouldReset = false;

const resultEl = document.getElementById('result');
const expressionEl = document.getElementById('expression');

function updateDisplay() {
    resultEl.textContent = currentInput;
}

function appendNumber(num) {
    if (shouldReset) {
        currentInput = num;
        shouldReset = false;
    } else {
        currentInput = currentInput === '0' ? num : currentInput + num;
    }
    updateDisplay();
}

function appendDecimal() {
    if (shouldReset) {
        currentInput = '0.';
        shouldReset = false;
    } else if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function setOperator(op) {
    if (operator && !shouldReset) {
        calculate();
    }
    previousInput = currentInput;
    operator = op;
    shouldReset = true;
    const symbols = { '+': '+', '-': '−', '*': '×', '/': '÷' };
    expressionEl.textContent = previousInput + ' ' + symbols[op];
}

function calculate() {
    if (!operator || shouldReset) return;
    const a = parseFloat(previousInput);
    const b = parseFloat(currentInput);
    let result;
    switch (operator) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = b !== 0 ? a / b : 'Error'; break;
    }
    const symbols = { '+': '+', '-': '−', '*': '×', '/': '÷' };
    expressionEl.textContent = previousInput + ' ' + symbols[operator] + ' ' + currentInput + ' =';
    currentInput = result === 'Error' ? 'Error' : String(parseFloat(result.toFixed(10)));
    operator = null;
    shouldReset = true;
    updateDisplay();
}

function clearAll() {
    currentInput = '0';
    previousInput = '';
    operator = null;
    shouldReset = false;
    expressionEl.textContent = '';
    updateDisplay();
}

function toggleSign() {
    if (currentInput !== '0' && currentInput !== 'Error') {
        currentInput = String(parseFloat(currentInput) * -1);
        updateDisplay();
    }
}

function percentage() {
    if (currentInput !== 'Error') {
        currentInput = String(parseFloat(currentInput) / 100);
        updateDisplay();
    }
}