let expect = require('chai').expect;
let assert = require('chai').assert;

class SubscriptionCard {
    constructor(firstName, lastName, SSN) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._SSN = SSN;
        this._subscriptions = [];
        this._blocked = false;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get SSN() {
        return this._SSN;
    }

    get isBlocked() {
        return this._blocked;
    }

    addSubscription(line, startDate, endDate) {
        this._subscriptions.push({
            line,
            startDate,
            endDate
        });
    }

    isValid(line, date) {
        if (this.isBlocked) return false;
        return this._subscriptions.filter(s => s.line === line || s.line === '*')
            .filter(s => {
                return s.startDate <= date &&
                    s.endDate >= date;
            }).length > 0;
    }

    block() {
        this._blocked = true;
    }

    unblock() {
        this._blocked = false;
    }
}

describe('SubscriptionCard test', function () {
    describe('Constructor test', function () {
        it('Must be instantiated with three parameters', function () {
            let subscriptionCard = new SubscriptionCard('Pesho', 'Peshov', 00000000);
            expect(subscriptionCard.firstName).to.equal('Pesho');
            expect(subscriptionCard.lastName).to.equal('Peshov');
            expect(subscriptionCard.SSN).to.equal(00000000);
        });

        it('With empty parameters should return undefined', function () {
            let subscriptionCard = new SubscriptionCard();
            expect(subscriptionCard.firstName).to.equal(undefined);
            expect(subscriptionCard.lastName).to.equal(undefined);
            expect(subscriptionCard.SSN).to.equal(undefined);
        });

        it('Parameters should not change and return correct result', function () {
            let subscriptionCard = new SubscriptionCard('Pesho', 'Peshov', 00000);
            subscriptionCard.firstName = 'Stamat';
            subscriptionCard.lastName = 'Stamatov';
            subscriptionCard.SSN = 55555;
            expect(subscriptionCard.firstName).to.equal('Pesho');
            expect(subscriptionCard.lastName).to.equal('Peshov');
            expect(subscriptionCard.SSN).to.equal(00000);
        });
    });

    describe('isBlocked  test', function () {
        it('Default value should be false', function () {
            let subscriptionCard = new SubscriptionCard('Pesho', 'Peshov', 00000000);
            expect(subscriptionCard.isBlocked).to.equal(false);
        });

        it('With card.block() should return true', function () {
            let subscriptionCard = new SubscriptionCard('Pesho', 'Peshov', 00000000);
            subscriptionCard.block();
            expect(subscriptionCard.isBlocked).to.equal(true);
        });
    });

    describe('Function addSubscription() test', function () {
        it('Adds an entry in the subscriptions with start and end date', function () {
            let subscriptionCard = new SubscriptionCard('Pesho', 'Peshov', 00000000);
            subscriptionCard.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            subscriptionCard.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
            assert.equal(subscriptionCard._subscriptions.length, 2);
        });

        it('With empty array should return length of 0', function () {
            let subscriptionCard = new SubscriptionCard('Pesho', 'Peshov', 00000000);
            assert.equal(subscriptionCard._subscriptions.length, 0);
        });
    });

    describe('Function block() test', function () {
        it('Set block() to true', function () {
            let subscriptionCard = new SubscriptionCard('Pesho', 'Peshov', 00000000);
            subscriptionCard.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            subscriptionCard.block();
            assert.isTrue(subscriptionCard.isBlocked);
        });

        it('Set unblock() to false', function () {
            let subscriptionCard = new SubscriptionCard('Pesho', 'Peshov', 00000000);
            subscriptionCard.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            subscriptionCard.unblock();
            assert.isFalse(subscriptionCard.isBlocked);
        });
    });

    describe('Function isValid() test', function () {
        it('With invalid input return correct result', function () {
            let subscriptionCard = new SubscriptionCard('Pesho', 'Peshov', 00000000);
            subscriptionCard.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.isFalse(subscriptionCard.isValid(new Date('120', '2018-04-22')));
        });

        it('With valid input return correct result', function () {
            let subscriptionCard = new SubscriptionCard('Pesho', 'Peshov', 00000000);
            subscriptionCard.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
            assert.isTrue(subscriptionCard.isValid('*', new Date('2018-05-25')));
        });

        it('With empty card should return false', function () {
            let subscriptionCard = new SubscriptionCard('Pesho', 'Peshov', 00000000);
            assert.isFalse(subscriptionCard.isValid('120', new Date('2018-04-22'), new Date('2018-05-21')));
        });

        it('With wrong line should return false', function () {
            let subscriptionCard = new SubscriptionCard('Pesho', 'Peshov', 00000000);
            subscriptionCard.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.isFalse(subscriptionCard.isValid('121', new Date('2018-04-22'), new Date('2018-05-21')));
        });

        it('With wrong startDate should return false', function () {
            let subscriptionCard = new SubscriptionCard('Pesho', 'Peshov', 00000000);
            subscriptionCard.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.isFalse(subscriptionCard.isValid('120', new Date('2018-04-21'), new Date('2018-05-21')));
        });

        it('With wrong endDate should return false', function () {
            let subscriptionCard = new SubscriptionCard('Pesho', 'Peshov', 00000000);
            subscriptionCard.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.isFalse(subscriptionCard.isValid('121', new Date('2018-04-22'), new Date('2018-05-22')));
        });
    });
});