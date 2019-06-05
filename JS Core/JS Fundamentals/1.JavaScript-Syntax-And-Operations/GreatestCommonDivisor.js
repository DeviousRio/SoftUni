function solve(firstNum, secondNum) {
    let gcd = 0;
    while (firstNum !== secondNum) {
        if (firstNum > secondNum) {
            firstNum -= secondNum;
        } else {
            secondNum -= firstNum;
        }
    }

    gcd = firstNum;
    console.log(gcd);
}

solve(15, 5);