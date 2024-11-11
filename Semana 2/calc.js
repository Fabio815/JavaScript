let opcao = '*', num1 = 9, num2 = 5;
let result;

switch(opcao){
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
}

console.log(result);