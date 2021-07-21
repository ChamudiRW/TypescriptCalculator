import { question } from "readline-sync";
type Operator = '+' | '-' | '*' | '/';

function main():void{
    const firstStr: string = question("Enter first number:\n");
    const operator: string = question("Enter Operator:\n");
    const secondStr: string = question("Enter Second number:\n");
    
    const validInput: boolean = isNumber(firstStr)&&isOperator(operator) && isNumber(secondStr);
    console.log(validInput);

    if (validInput){
        console.log('is valid');
        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondStr);
        const result = calculate(firstNum,operator as Operator,secondNum);
        console.log(result);
    }
    else{
        console.log('\ninvalid input\n');
        main();
    }
}
function isNumber(str: string): boolean{
    const maybeNum = parseInt(str); 
    const isNum: boolean = Boolean(maybeNum);
    return isNum;
}

function isOperator(operator: string): boolean{
    switch(operator){
        case '+':
        case '-':
        case '-':
        case '-':
            return true;
        default:
            return false;
    }
    
}

function calculate(firstNum:number,operator:Operator,secondNum:number){
    switch(operator){
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