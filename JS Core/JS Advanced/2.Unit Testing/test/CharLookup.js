let expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }

    if (string.length <= index || index < 0) {
        return 'Incorrect index';
    }

    return string.charAt(index);
}

describe('lookupChar', function () {
    it('with a non-string first parameter should return undefined', function () {
        expect(lookupChar(13, 0)).to.equal(undefined, 'The function did not return the correct result!');
    });

    it('with a non-number second parameter should return undefined', function () {
        expect(lookupChar('pesho', 'gosho')).to.equal(undefined, 'The function did not return the correct result!');
    });

    it('with floating-point second parameter should return undefined', function () {
        expect(lookupChar('pesho', 1.5)).to.equal(undefined, 'The function did not return the correct result!');
    });

    it('with incorrect index length should return "Incorrect index"', function () {
        expect(lookupChar('pesho', 50)).to.equal('Incorrect index', 'The function did not return the correct result!');
    });

    it('with negative index value should return "Incorrect index"', function () {
        expect(lookupChar('pesho', -1)).to.equal('Incorrect index', 'The function did not return the correct result!');
    });

    it('with correct types and values should return the character at the specified index', function () {
        expect(lookupChar('pesho', 2)).to.equal('s');
    });
});