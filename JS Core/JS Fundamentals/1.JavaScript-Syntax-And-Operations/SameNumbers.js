function solve(input) {
    let splittedNum = input.toString().split("");
    let lengthNum = splittedNum.length;
    let counter = 0;
    let sum = 0;

    for (let i = 0; i <= lengthNum; i++) {
        if (splittedNum[i] == splittedNum[i + 1]) {
            counter++;
        }
    }

    if (counter == lengthNum) {
        console.log("true");
    } else {
        console.log("false");
    }

    for (let k = 0; k < lengthNum; k++) {
        sum = sum += Number(splittedNum[k]);
    }

    console.log(sum);
}

solve(222222);