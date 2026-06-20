let num1 = document.getElementById("input1").value
let num2 = document.getElementById("input2").value
let operator = document.getElementById("operator").value
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return parseFloat(num1) + parseFloat(num2);
        case '-':
            return parseFloat(num1) - parseFloat(num2);
        case '*':
            return parseFloat(num1) * parseFloat(num2);
        case '/':
            if (parseFloat(num2) === 0) {
                return "Error: Division by zero";
            }
            return parseFloat(num1) / parseFloat(num2);
        default:
            return "Error: Invalid operator";
    }}
let result = calculate(num1, num2, operator)
document.getElementById("result").innerHTML = "The result is: " + result
alert(result)