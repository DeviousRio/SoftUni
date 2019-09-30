function solve(firstNum, secondNum, thirdNum) {
    let largestNum;

    if (firstNum > secondNum && firstNum > thirdNum) {
        largestNum = firstNum;
    } else if (secondNum > firstNum && secondNum > thirdNum) {
        largestNum = secondNum;
    } else {
        largestNum = thirdNum
    }

    console.log(`The largest number is ${largestNum}.`);
}

solve(-3, -5, -22.5);