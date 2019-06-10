const expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('with a non-number parameter should return undefined', function () {
            expect(mathEnforcer.addFive('pesho')).to.equal(undefined, 'The function did not return the correct result!');
        });

        it('with negative number parameter add 5 and return the result', function () {
            expect(mathEnforcer.addFive(-6)).to.equal(-1);
        });

        it('with number parameter add 5 and return the result', function () {
            expect(mathEnforcer.addFive(10)).to.equal(15);
        });

        it('with floating point parameter add 5 and return the result', function () {
            expect(mathEnforcer.addFive(10.5)).to.equal(15.5);
        });
    });

    describe('subtractTen', function () {
        it('with a non-number parameter should return undefined', function () {
            expect(mathEnforcer.subtractTen('pesho')).to.equal(undefined, 'The function did not return the correct result!');
        });

        it('with number parameter subtract 10 and return the result', function () {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
        });

        it('with negative number parameter subtract 10 and return the result', function () {
            expect(mathEnforcer.subtractTen(-20)).to.equal(-30);
        });

        it('with floating-point parameter subtract 10 and return the result', function () {
            expect(mathEnforcer.subtractTen(5.16)).to.be.closeTo(-4.84, 0.01);
        });
    });

    describe('sum', function () {
        it('with a non-number first parameter should return undefined', function () {
            expect(mathEnforcer.sum('pesho', 5)).to.equal(undefined, 'The function did not return the correct result!');
        });

        it('with a non-number second parameter should return undefined', function () {
            expect(mathEnforcer.sum(5, 'pesho')).to.equal(undefined, 'The function did not return the correct result!');
        });

        it('with a non-number first and second parameters should return undefined', function () {
            expect(mathEnforcer.sum('pesho', 'gosho')).to.equal(undefined, 'The function did not return the correcr result!');
        });

        it('with numbers should sum the parameters and return the result', function () {
            expect(mathEnforcer.sum(5, 5)).to.equal(10);
        });

        it('with negative first parameter should sum the parameters and return the result', function () {
            expect(mathEnforcer.sum(-10, 5)).to.equal(-5);
        });

        it('with negative second parameter should sum the parameters and return the result', function () {
            expect(mathEnforcer.sum(5, -2)).to.equal(3);
        });

        it('with floating-point first parameter should sum the parameters and return the result', function () {
            expect(mathEnforcer.sum(1.5, 1)).to.equal(2.5);
        });

        it('with floating-point second parameter should sum the parameters and return the result', function () {
            expect(mathEnforcer.sum(2, 1.5)).to.equal(3.5);
        });

        it('with both floating-point parameters should sum and return the result', function () {
            expect(mathEnforcer.sum(4.7, 3.4)).to.be.closeTo(8.1, 0.01);
        });
    });
});