let expect = require('chai').expect;
let assert = require('chai').assert;

class Calculator {
    constructor() {
        this.expenses = [];
    }

    add(data) {
        this.expenses.push(data);
    }

    divideNums() {
        let divide;
        for (let i = 0; i < this.expenses.length; i++) {
            if (typeof (this.expenses[i]) === 'number') {
                if (i === 0 || divide === undefined) {
                    divide = this.expenses[i];
                } else {
                    if (this.expenses[i] === 0) {
                        return 'Cannot divide by zero';
                    }
                    divide /= this.expenses[i];
                }
            }
        }
        if (divide !== undefined) {
            this.expenses = [divide];
            return divide;
        } else {
            throw new Error('There are no numbers in the array!')
        }
    }

    toString() {
        if (this.expenses.length > 0)
            return this.expenses.join(" -> ");
        else return 'empty array';
    }

    orderBy() {
        if (this.expenses.length > 0) {
            let isNumber = true;
            for (let data of this.expenses) {
                if (typeof data !== 'number')
                    isNumber = false;
            }
            if (isNumber) {
                return this.expenses.sort((a, b) => a - b).join(', ');
            } else {
                return this.expenses.sort().join(', ');
            }
        } else return 'empty';
    }
}

describe('Calculator test', function () {
    describe('Constructor test', function () {
        it('Check if the array is empty and if expenses is array and return the result', function () {
            let calc = new Calculator();
            assert.isArray(calc.expenses);
            assert.isEmpty(calc.expenses);
        });
    });

    describe('Add data of any type test', function () {
        it('Add primitive types', function () {
            let calc = new Calculator();
            calc.add(5);
            calc.add('Pesho');
            calc.add(5.5);
            calc.add(true);

            assert.deepEqual(calc.expenses, [5, 'Pesho', 5.5, true]);
        });

        it('Add reference types', function () {
            let calc = new Calculator();
            calc.add({
                key: 'value'
            });
            calc.add([1]);
            calc.add(() => true);

            assert.deepEqual(calc.expenses.length, 3);
        });
    });

    describe('Divide numbers test', function () {
        it('Divide only numbers from the expenses and return the result', function () {
            let calc = new Calculator();
            calc.add(10);
            calc.add(2);

            assert.equal(calc.divideNums(), 5);
        });

        it('Should return error message if there are no numbers in the array', function () {
            let calc = new Calculator();

            assert.throw(() => calc.divideNums(), 'There are no numbers in the array!');
        });

        it('Should return error message if the added type is NaN', function () {
            let calc = new Calculator();
            calc.add('Pesho');
            calc.add('Ariana');

            assert.throw(() => calc.divideNums(), 'There are no numbers in the array!');
        });

        it('Divide with floating point numbers', function () {
            let calc = new Calculator();
            calc.add(20.5);
            calc.add(2);

            assert.closeTo(calc.divideNums(), 10.25, 0.01);
        });

        it('Divide by 0 should return message', function () {
            let calc = new Calculator();
            calc.add(5);
            calc.add(0);

            assert.equal(calc.divideNums(), 'Cannot divide by zero');
        });
    });

    describe('toString function test', function () {
        it('Should return list of all elements from the expenses joined by "->"', function () {
            let calc = new Calculator();
            calc.add(10);
            calc.add('Pesho');
            calc.add('5');

            assert.equal(calc.toString(), '10 -> Pesho -> 5');
        });

        it('If there are no stored items should return string "empty array"', function () {
            let calc = new Calculator();
            assert.equal(calc.toString(), 'empty array');
        });
    });

    describe('orderBy function test', function () {
        it('Should sort the numbers in ascending order', function () {
            let calc = new Calculator();
            calc.add(100);
            calc.add(-5);
            calc.add(5);
            calc.add(20);

            assert.equal(calc.orderBy(), '-5, 5, 20, 100');
        });

        it('With mixed added data should return correct result', function () {
            let calc = new Calculator();
            calc.add(50);
            calc.add('Pesho');
            calc.add(5);
            calc.add('Stamat');

            assert.equal(calc.orderBy(), '5, 50, Pesho, Stamat');
        });
    });
});