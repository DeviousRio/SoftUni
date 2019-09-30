let expect = require('chai').expect;

class Warehouse {

    get capacity() {
        return this._capacity;
    }

    set capacity(givenSpace) {

        if (typeof givenSpace === 'number' && givenSpace > 0) {
            return this._capacity = givenSpace;
        } else {
            throw `Invalid given warehouse space`;
        }
    }

    constructor(capacity) {
        this.capacity = capacity;
        this.availableProducts = {
            'Food': {},
            'Drink': {}
        };
    }

    addProduct(type, product, quantity) {

        let addedQuantity = ((this.capacity - this.occupiedCapacity()) - quantity);
        let output;

        if (addedQuantity >= 0) {

            if (this.availableProducts[type].hasOwnProperty(product) === false) {
                this.availableProducts[type][product] = 0;
            }

            this.availableProducts[type][product] += quantity;
            output = this.availableProducts[type];

        } else {
            throw `There is not enough space or the warehouse is already full`;
        }

        return output;
    }

    orderProducts(type) {

        let output;
        let sortedKeys = Object.keys(this.availableProducts[type])
            .sort((a, b) => this.availableProducts[type][b] - this.availableProducts[type][a]);

        let newObj = {};

        for (let product of sortedKeys) {

            if (newObj.hasOwnProperty(product) === false) {
                newObj[product] = 0;
            }

            newObj[product] += this.availableProducts[type][product];
        }

        this.availableProducts[type] = newObj;
        output = this.availableProducts[type];

        return output;
    }

    occupiedCapacity() {

        let output = 0;
        let productsCount = Object.keys(this.availableProducts['Food']).length +
            Object.keys(this.availableProducts['Drink']).length;

        if (productsCount > 0) {

            let quantityInStock = 0;

            for (let type of Object.keys(this.availableProducts)) {

                for (let product of Object.keys(this.availableProducts[type])) {

                    quantityInStock += this.availableProducts[type][product];
                }
            }

            output = quantityInStock;
        }
        return output;
    }

    revision() {

        let output = "";

        if (this.occupiedCapacity() > 0) {

            for (let type of Object.keys(this.availableProducts)) {
                output += `Product type - [${type}]\n`;
                for (let product of Object.keys(this.availableProducts[type])) {
                    output += `- ${product} ${this.availableProducts[type][product]}\n`;
                }
            }
        } else {
            output = 'The warehouse is empty';
        }

        return output.trim();
    }

    scrapeAProduct(product, quantity) {

        let type = Object.keys(this.availableProducts).find(t => Object.keys(this.availableProducts[t]).includes(product));
        let output;

        if (type !== undefined) {

            if (quantity <= this.availableProducts[type][product]) {
                this.availableProducts[type][product] -= quantity;
            } else {
                this.availableProducts[type][product] = 0;
            }

            output = this.availableProducts[type];

        } else {
            throw `${product} do not exists`;
        }

        return output;
    }
}

describe('Warehouse test', function () {
    // Testing class functionality
    describe('Test functionality', function () {
        it('Expect correct capacity', function () {
            let warehouse = new Warehouse(5);
            expect(warehouse.capacity).to.equal(5);
        });

        it('Expect to throw error with negative capacity', function () {
            expect(function () {
                let warehouse = new Warehouse(-5);
            }).to.throw('Invalid given warehouse space');
        });

        it('Expect to throw error with 0 capacity', function () {
            expect(function () {
                let warehouse = new Warehouse(0);
            }).to.throw('Invalid given warehouse space');
        });

        it('Expect to throw error with string capacity', function () {
            expect(function () {
                let warehouse = new Warehouse('Pesho');
            }).to.throw('Invalid given warehouse space');
        });
    });

    // Testing add
    describe('Test addProduct(type, product, quantity)', function () {
        it('Expect to add product and return the object with the given type with already added products', function () {
            let warehouse = new Warehouse(5);
            warehouse.addProduct('Food', 'Caca', 1);
            warehouse.addProduct('Drink', 'Beer', 3);
            warehouse.addProduct('Food', 'Potatoes', 1);
            expect(Object.keys(warehouse.availableProducts['Food']).length).to.equal(2);
        });

        it('Expect to throw error if the capacity is less than the given products', function () {
            expect(function () {
                let warehouse = new Warehouse(5);
                warehouse.addProduct('Drink', 'Beer', 20);
            }).to.throw('There is not enough space or the warehouse is already full');
        });
    });

    // Testing sort
    describe('Test orderProducts(type)', function () {
        // Descending order
        it('Expect to return correct result after sorting all products by quantity in descending order', function () {
            let warehouse = new Warehouse(100);
            warehouse.addProduct('Food', 'Caca', 10);
            warehouse.addProduct('Food', 'Potatoes', 15);
            warehouse.addProduct('Food', 'Shkembe', 30);
            warehouse.addProduct('Drink', 'Beer', 40);

            let products = warehouse.orderProducts('Food');
            let expectedResult = {
                'Shkembe': 30,
                'Potatoes': 15,
                'Caca': 10
            };

            let expectedProducts = Object.keys(expectedResult);
            let resultProducts = Object.keys(products);

            for (let i = 0; i < expectedProducts.length; i++) {
                expect(resultProducts[i]).to.equal(expectedProducts[i]);
            }
        });
    });

    // Testing capacity
    describe('Test occupiedCapacity()', function () {
        it('Expect to return correct result', function () {
            let warehouse = new Warehouse(50);
            warehouse.addProduct('Food', 'Salam', 5);
            warehouse.addProduct('Food', 'Maslini', 10);
            warehouse.addProduct('Drink', 'Beer', 20);
            expect(warehouse.occupiedCapacity()).to.equal(35);
        });
    });

    // Testing revision
    describe('Test revision()', function () {
        it('Expect to return empty warehouse', function () {
            let warehouse = new Warehouse(5);
            expect(warehouse.revision()).to.equal('The warehouse is empty');
        });

        it('Expect to print all products with their quantity', function () {
            let warehouse = new Warehouse(100);
            warehouse.addProduct('Food', 'Cheese', 20);
            warehouse.addProduct('Food', 'Tomatoes', 20);
            warehouse.addProduct('Food', 'Shkembe', 20);
            warehouse.addProduct('Drink', 'Hmel', 20);
            expect(warehouse.revision()).to.equal('Product type - [Food]\n- Cheese 20\n- Tomatoes 20\n- Shkembe 20\nProduct type - [Drink]\n- Hmel 20');
        });

        it('Expect to print food products with their quantity', function () {
            let warehouse = new Warehouse(100);
            warehouse.addProduct('Food', 'Cheese', 20);
            warehouse.addProduct('Food', 'Hmel', 20);
            expect(warehouse.revision()).to.equal('Product type - [Food]\n- Cheese 20\n- Hmel 20\nProduct type - [Drink]');
        });

        it('Expect to print drinks with their quantity', function () {
            let warehouse = new Warehouse(100);
            warehouse.addProduct('Drink', 'Mastika', 20);
            warehouse.addProduct('Drink', 'Hmel', 20);
            expect(warehouse.revision()).to.equal('Product type - [Food]\nProduct type - [Drink]\n- Mastika 20\n- Hmel 20');
        });
    });

    // Test scrape
    describe('Test scrapeAProduct(product, quantity)', function () {
        it('Expect to throw error with non existing type', function () {
            expect(function () {
                let warehouse = new Warehouse(5);
                warehouse.addProduct('Drink', 'Ariana', 1);
                warehouse.scrapeAProduct('Kamenitza', 1);
            }).to.throw('Kamenitza do not exists');
        });

        it('Expect to return correct result', function () {
            let warehouse = new Warehouse(5);
            warehouse.addProduct('Drink', 'Ariana', 5);
            expect(JSON.stringify(warehouse.scrapeAProduct('Ariana', 3))).to.equal('{"Ariana":2}');
        });
    });
});