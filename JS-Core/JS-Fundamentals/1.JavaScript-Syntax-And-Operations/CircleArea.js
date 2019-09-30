function solve(arg) {
    if (typeof (arg) !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof (arg)}.`);
    } else {
        let area = Math.PI * Math.pow(arg, 2);
        console.log(area.toFixed(2));
    }
}

solve(5);