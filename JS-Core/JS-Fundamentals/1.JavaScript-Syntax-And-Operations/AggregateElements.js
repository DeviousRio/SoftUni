function solve(input) {
    let sum = 0;
    let inverseSum = 0;
    let concatNumber = '';

    for (let number of input) {
        sum += number;
        inverseSum += 1 / number;
        concatNumber += number;
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concatNumber);
}

solve([1, 2, 3]);