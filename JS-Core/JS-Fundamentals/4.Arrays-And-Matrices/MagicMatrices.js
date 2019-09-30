function solve(matrix) {
    let rowSum = 0;
    let result;
    for (let row = 0; row < matrix.length; row++) {
        let currentRowSum = 0;
        for (let col = 0; col < matrix[row].length; col++) {
            currentRowSum += matrix[row][col];
        }
        if (row === 0) {
            rowSum = currentRowSum;
        } else if (rowSum !== currentRowSum) {
            result = false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }
        if (colSum !== rowSum) {
            result = false;
        }
    }

    result = true;
    console.log(result);
}

solve([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);