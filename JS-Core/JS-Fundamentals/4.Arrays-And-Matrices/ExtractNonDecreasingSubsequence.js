function solve(arr) {
    let minNum = 0;
    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= minNum) {
            resultArr.push(arr[i]);
            minNum = arr[i];
        }
    }

    console.log(resultArr.join('\n'));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);