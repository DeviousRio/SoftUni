function solve(arr1, arr2, arr3) {
    let newArr = [];
    let sum = 0;
    let counter = 0;

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            for (let k = 0; k < arr3.length; k++) {
                if (arr1[i] == arr2[j] && arr1[i] == arr3[k]) {
                    newArr.push(arr1[i]);
                }
            }
        }
    }

    newArr.sort();

    for (let l = 0; l < newArr.length; l++) {
        sum += newArr[l];
        counter++;
    }

    let splittedArr = newArr.join(', ');

    console.log(`The common elements are ${splittedArr}.`);
    console.log(`Average: ${sum / counter}.`);

    newArr.sort((a, b) => a - b);
    let lowMiddle = Math.floor((newArr.length - 1) / 2);
    let highMiddle = Math.ceil((newArr.length - 1) / 2);
    let median = (newArr[lowMiddle] + newArr[highMiddle]) / 2;

    console.log(`Median: ${median}.`)
}

solve([5, 6, 50, 10, 1, 2], [5, 4, 8, 50, 2, 10], [5, 2, 50]);