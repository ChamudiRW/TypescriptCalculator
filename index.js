"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = readline_sync_1.question("Enter first number:\n");
    var operator = readline_sync_1.question("Enter Operator:\n");
    var secondStr = readline_sync_1.question("Enter Second number:\n");
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    console.log(validInput);
    if (validInput) {
        console.log('is valid');
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('\ninvalid input\n');
        main();
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = Boolean(maybeNum);
    return isNum;
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '-':
        case '-':
            return true;
        default:
            return false;
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
main();