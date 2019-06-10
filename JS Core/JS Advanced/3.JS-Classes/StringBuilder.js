const expect = require('chai').expect;

class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for (let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }

    toString() {
        return this._stringArray.join('');
    }
}

describe('String Builder tests', function () {
    beforeEach(function () {
        sb = new StringBuilder();
    });

    describe('check if functions are attached to proto', function () {
        it('check if functions are attached to proto', function () {
            expect(typeof StringBuilder.prototype.append === 'function').to.true;
            expect(typeof StringBuilder.prototype.prepend === 'function').to.true;
            expect(typeof StringBuilder.prototype.insertAt === 'function').to.true;
            expect(typeof StringBuilder.prototype.remove === 'function').to.true;
            expect(typeof StringBuilder.prototype.toString === 'function').to.true;
        });
    });

    describe('constructor tests', function () {
        it('is initialized with wrong params throw error', function () {
            expect(() => new StringBuilder({})).to.throw(TypeError);
        });

        it('is initialized without params', function () {
            expect(sb.toString()).to.equal('', 'Expect empty string');
        });

        it('is initialized with params', function () {
            sb = new StringBuilder('Test');
            const expected = 'Test';
            expect(sb.toString()).to.equal(expected, 'Expect to return Test');
        });
    });

    describe('Prepend tests', function () {
        it('is initialized with wrong parameter type', function () {
            expect(() => {
                sb.prepend({
                    name: 'Pesho'
                });
            }).to.throw(TypeError);
        });

        it('is initialized with correct data', function () {
            const expected = 'Test123';
            sb.prepend('Test123');
            expect(sb.toString()).to.equal(expected, 'Expect to return Test123');
        });

        it('is initialized with multiple correct data', function () {
            const expected = 'JSfromHello';
            sb.prepend('Hello');
            sb.prepend('from');
            sb.prepend('JS');
            expect(sb.toString()).to.equal(expected, `Expect to return ${expected}`);
        });
    });

    describe('Append', function () {
        it('is initialized with wrong parameter type', function () {
            const errorFunc = () => {
                sb.append({
                    name: 'Pesho'
                });
            };
            expect(() => {
                sb.append({
                    name: 'Pesho'
                });
            }).to.throw(TypeError);
        });

        it('is initialized with correct data', function () {
            const expected = 'HellofromJS';
            sb.append('Hello');
            sb.append('from');
            sb.append('JS');
            expect(sb.toString()).to.equal(expected, `Expect to return ${expected}`);
        });
    });

    describe('remove tests', function () {
        it('works correctly', function () {
            const expected = 'Hllo from JS';
            sb.append('Hello ');
            sb.append('from ');
            sb.append('JS');
            sb.remove(1, 1);
            expect(sb.toString()).to.equal(expected, `Expect to return ${expected}`);
        });
    });

    describe('insertAt tests', function () {
        it('is tested with wrong parameter type', function () {
            const errorFunc = () => {
                sb.insertAt({});
            };
            expect(errorFunc).to.throw(TypeError);
        });

        it('insert at the beginning', function () {
            sb.append('Pesho');
            sb.insertAt('Tova e ', 0);
            expect(sb.toString()).to.equal('Tova e Pesho', 'String builder did not insert correctly');
        });

        it('insert at the end', function () {
            sb.append('Pesho ');
            sb.insertAt('Peshov', 8);
            expect(sb.toString()).to.equal('Pesho Peshov', 'String builder did not insert correctly');
        });

        it('insert at the middle', function () {
            sb.append('Pesho');
            sb.insertAt('Stamat', 2);
            expect(sb.toString()).to.equal('PeStamatsho', 'String builder did not insert correctly');
        });
    });

    describe('toString tests', function () {
        it('test if it works correctly', function () {
            sb.prepend('Test123');
            expect(sb.toString()).to.equal('Test123');
        });
    });
});