function solve() {
    let obj = (() => {
        let arr = [];
        let size = 0;
        let sortElements = (a, b) => a - b;
        let add = function (element) {
            arr.push(element);
            arr.sort(sortElements);
            this.size++;
            return arr;
        };

        let remove = function (index) {
            if (index >= 0 && index < arr.length) {
                arr.splice(index, 1);
                arr.sort(sortElements);
                this.size--;
                return arr;
            }
        };

        let get = function (index) {
            if (index >= 0 && index < arr.length) {
                return arr[index];
            }
        };

        return {add, remove, get, size};
    })();
    return obj;
}