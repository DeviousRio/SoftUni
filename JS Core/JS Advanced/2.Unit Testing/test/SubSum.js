function solve(arr, firstIndex, secondIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (firstIndex < 0) {
        firstIndex = 0;
    }
    
    if (secondIndex > arr.length - 1) {
        secondIndex = arr.length - 1;
    }

    let sum = 0;

    for (let i = firstIndex; i <= secondIndex; i++) {
        sum += Number(arr[i]);
    }

    return sum;
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));