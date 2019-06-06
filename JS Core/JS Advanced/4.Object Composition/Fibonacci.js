function solve() {
    return (function () {
        let firstNum = 0;
        let secondNum = 1;

        return function() {
            let result = secondNum;
            let sum = firstNum + secondNum;
            firstNum = secondNum;
            secondNum = sum;

            return result;
        }
    })();
}

let fibonacci = new solve();
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());