function solve(num) {
    if (num === ' ' || num === '' || num === undefined) {
        for (let i = 1; i <= 5; i++) {
            console.log('* '.repeat(5));
        }
    } else {
        for (let i = 1; i <= num; i++) {
            console.log('* '.repeat(num));
        }
    }
}

solve(5);