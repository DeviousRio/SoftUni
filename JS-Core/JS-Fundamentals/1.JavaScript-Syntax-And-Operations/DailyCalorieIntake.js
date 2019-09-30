function solve(arr, activeFactor) {
    let af = 0;
    let result = 0;

    let manFormula = 66 + 13.8 * arr[1] + 5 * arr[2] - 6.8 * arr[3];
    let womanFormula = 655 + 9.7 * arr[1] + 1.85 * arr[2] - 4.7 * arr[3];

    if (activeFactor == 0) {
        af = 1.2;
    } else if (activeFactor > 0 && activeFactor <= 2) {
        af = 1.375;
    } else if (activeFactor > 2 && activeFactor <= 5) {
        af = 1.55;
    } else if (activeFactor > 5 && activeFactor <= 7) {
        af = 1.725;
    } else {
        af = 1.90;
    }

    if (arr[0] == 'm') {
        result = Math.round(manFormula * af);
        console.log(result);
    } else {
        result = Math.round(womanFormula * af);
        console.log(result);
    }
}

solve(['m', 86, 185, 25], 3);