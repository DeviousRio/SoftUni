function solve(firstNum, secondNum, operator) {
    let sum = 0;

    switch (operator) {
        case '+':
            sum = firstNum + secondNum;
            break;
        case '-':
            sum = firstNum - secondNum;
            break;
        case '*':
            sum = firstNum * secondNum;
            break;
        case '/':
            sum = firstNum / secondNum;
            break;
        case '%':
            sum = firstNum % secondNum;
            break;
        case '**':
            sum = firstNum ** secondNum;
            break;
    }

    console.log(sum);
}

solve(5, 6, '*');