function solve([rows, cols, startRow, startCol]) {
    let matrix = [];

    for (let row = 0; row < cols; row++) {
        matrix[row] = [];
        for (let col = 0; col < rows; col++) {
            matrix[row][col] = Math.max(Math.abs(startRow - row), Math.abs(startCol - col)) + 1;
        }
    }

    for (let element of matrix) {
        console.log(element.join(' '));
    }
}

solve([4 ,4, 0, 0]);