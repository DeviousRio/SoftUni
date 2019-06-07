let assert = require('chai').assert;
let expect = require('chai').expect;

class HolidayPackage {
    constructor(destination, season) {
        this.vacationers = [];
        this.destination = destination;
        this.season = season;
        this.insuranceIncluded = false; // Default value
    }

    showVacationers() {
        if (this.vacationers.length > 0)
            return "Vacationers:\n" + this.vacationers.join("\n");
        else
            return "No vacationers are added yet";
    }

    addVacationer(vacationerName) {
        if (typeof vacationerName !== "string" || vacationerName === ' ') {
            throw new Error("Vacationer name must be a non-empty string");
        }
        if (vacationerName.split(" ").length !== 2) {
            throw new Error("Name must consist of first name and last name");
        }
        this.vacationers.push(vacationerName);
    }

    get insuranceIncluded() {
        return this._insuranceIncluded;
    }

    set insuranceIncluded(insurance) {
        if (typeof insurance !== 'boolean') {
            throw new Error("Insurance status must be a boolean");
        }
        this._insuranceIncluded = insurance;
    }

    generateHolidayPackage() {
        if (this.vacationers.length < 1) {
            throw new Error("There must be at least 1 vacationer added");
        }
        let totalPrice = this.vacationers.length * 400;

        if (this.season === "Summer" || this.season === "Winter") {
            totalPrice += 200;
        }

        totalPrice += this.insuranceIncluded === true ? 100 : 0;

        return "Holiday Package Generated\n" +
            "Destination: " + this.destination + "\n" +
            this.showVacationers() + "\n" +
            "Price: " + totalPrice;
    }
}

describe('HolidayPackage test', function () {
    describe('Constructor test', function () {
        it('Destination and season should be strings', function () {
            let holidayPackage = new HolidayPackage('Italy', 'Summer');
            expect(holidayPackage.destination).to.equal('Italy');
            expect(holidayPackage.season).to.equal('Summer');
        });

        it('Destination and season should change', function () {
            let holidayPackage = new HolidayPackage('Italy', 'Summer');
            holidayPackage.destination = 'Vidin';
            holidayPackage.season = 'Spring';
            expect(holidayPackage.destination).to.equal('Vidin');
            expect(holidayPackage.season).to.equal('Spring');
        });

        it('With empty parameters should return undefined', function () {
            let holidayPackage = new HolidayPackage();
            expect(holidayPackage.destination).to.equal(undefined);
            expect(holidayPackage.season).to.equal(undefined);
        });
    });

    describe('Insurance test', function () {
        it('With default value should return correct result', function () {
            let holidayPackage = new HolidayPackage('Italy', 'Summer');
            expect(holidayPackage.insuranceIncluded).to.equal(false);
        });

        it('With value set to true should return correct result', function () {
            let holidayPackage = new HolidayPackage('Italy', 'Summer');
            expect(holidayPackage.insuranceIncluded = true).to.equal(true);
        });

        it('With any other type should throw error', function () {
            let holidayPackage = new HolidayPackage('Italy', 'Summer');
            assert.Throw(() => holidayPackage.insuranceIncluded = 'true', 'Insurance status must be a boolean');
            assert.Throw(() => holidayPackage.insuranceIncluded = 5, 'Insurance status must be a boolean');
            assert.Throw(() => holidayPackage.insuranceIncluded = undefined, 'Insurance status must be a boolean');
        });
    });

    describe('showVacationers() function test', function () {
        it(`If there aren't any vacationers return message`, function () {
            let holidayPackage = new HolidayPackage('Italy', 'Summer');
            expect(holidayPackage.showVacationers()).to.equal('No vacationers are added yet');
        });

        it('With added vacationers should print them on new line', function () {
            let holidayPackage = new HolidayPackage('Italy', 'Summer');
            let expected = `Vacationers:\n`;
            holidayPackage.addVacationer('Pesho Peshov');
            holidayPackage.addVacationer('Stamat Stamatov');
            holidayPackage.addVacationer('Gosho Goshov');
            expected += holidayPackage.vacationers.join('\n');

            expect(holidayPackage.showVacationers()).to.equal(expected);
        });
    });

    describe('addVacationer() function test', function () {
        it('With valid input should return correct result', function () {
            let holidayPackage = new HolidayPackage('Italy', 'Summer');
            holidayPackage.addVacationer('Pesho Goshov');
            assert.equal(holidayPackage.vacationers.length, 1);
        });

        it('With more than 1 vacationer added should return correct result', function () {
            let holidayPackage = new HolidayPackage('Italy', 'Summer');
            holidayPackage.addVacationer('Pesho Goshov');
            holidayPackage.addVacationer('Gosho Peshov');
            holidayPackage.addVacationer('Stamat Stamatov');
            assert.equal(holidayPackage.vacationers.length, 3);
        });

        it('With empty array of vacationers should return length of 0', function () {
            let holidayPackage = new HolidayPackage('Italy', 'Summer');
            assert.equal(holidayPackage.vacationers.length, 0);
        });

        it('With input different than string should throw error', function () {
            let holidayPackage = new HolidayPackage('Italy', 'Summer');
            assert.Throw(() => holidayPackage.addVacationer(5), 'Vacationer name must be a non-empty string');
        });

        it('With empty space should throw error', function () {
            let holidayPackage = new HolidayPackage('Italy', 'Summer');
            assert.Throw(() => holidayPackage.addVacationer(' '), 'Vacationer name must be a non-empty string');
        });

        it('With only first name should throw error', function () {
            let holidayPackage = new HolidayPackage('Italy', 'Summer');
            assert.Throw(() => holidayPackage.addVacationer('Gosho'), 'Name must consist of first name and last name');
        });

        it('With no input should throw error', function () {
            let holidayPackage = new HolidayPackage('Italy', 'Summer');
            assert.Throw(() => holidayPackage.addVacationer(''), 'Name must consist of first name and last name');
        });

        it('With boolean input should throw error', function () {
            let holidayPackage = new HolidayPackage('Italy', 'Summer');
            assert.Throw(() => holidayPackage.addVacationer(true), 'Vacationer name must be a non-empty string');
        });
    });

    describe('generateHolidayPackage() function test', function () {
        it('With no vacationers should throw error', function () {
            let holidayPackage = new HolidayPackage('Italy', 'Summer');
            assert.Throw(() => holidayPackage.generateHolidayPackage(), 'There must be at least 1 vacationer added');
        });

        it('With one vacationer, summer, with insurance return correct result', function () {
            let holidayPackage = new HolidayPackage('Italy', 'Summer');
            holidayPackage.addVacationer('Stamat Stamatov');
            holidayPackage.insuranceIncluded = true;
            let totalPrice = holidayPackage.vacationers.length * 400;
            totalPrice += 200; // Summer
            totalPrice += 100; // Insurance included

            let expectedResult = `Holiday Package Generated\n` + `Destination: ${holidayPackage.destination}` + `\n` +
                holidayPackage.showVacationers() + `\n` + `Price: ${totalPrice}`;

            expect(holidayPackage.generateHolidayPackage()).to.equal(expectedResult);
        });

        it('With one vacationer, spring, no insurance should return correct result', function () {
            let holidayPackage = new HolidayPackage('Italy', 'Spring');
            holidayPackage.addVacationer('Stamat Stamatov');
            let totalPrice = holidayPackage.vacationers.length * 400;

            let expectedResult = `Holiday Package Generated\n` + `Destination: ${holidayPackage.destination}` + `\n` +
                holidayPackage.showVacationers() + `\n` + `Price: ${totalPrice}`;

            expect(holidayPackage.generateHolidayPackage()).to.equal(expectedResult);
        });
    });
});