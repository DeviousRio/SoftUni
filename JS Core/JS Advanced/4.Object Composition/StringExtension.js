(function solve() {
    String.prototype.ensureStart = function (substring) {
        if (!this.startsWith(substring)) {
            return `${substring}${this}`;
        }
        return this.toString();
    }

    String.prototype.ensureEnd = function (substring) {
        if (!this.endsWith(substring)) {
            return `${this}${substring}`;
        }
        return this.toString();
    }

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }

        if (n >= this.toString().length) {
            return this.toString();
        }

        const lastIndexOfSpace = this.toString().substr(0, n - 2).lastIndexOf(' ');

        if (lastIndexOfSpace !== -1) {
            return this.toString().substr(0, lastIndexOfSpace) + '...';
        } else {
            return this.toString().substr(0, n - 3) + '...';
        }
    }

    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            let index = string.indexOf('{'+i+'}');
            while (index != -1) {
                string = string.replace('{'+i+'}', params[i]);
                index = string.indexOf('{'+i+'}');
            }
        }
        return string;
    }

    String.prototype.isEmpty = function () {
        return this.length === 0;
    }
})();

let str = 'my string'
str = str.ensureStart('my')
str = str.ensureStart('hello ')
str = str.truncate(16)
str = str.truncate(14)
str = str.truncate(8)
str = str.truncate(4)
str = str.truncate(2)
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');
console.log(str);