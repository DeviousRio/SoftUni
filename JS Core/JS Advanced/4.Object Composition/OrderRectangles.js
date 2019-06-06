function orderRectangles(input) {
    function createRectangle(width, height) {
        let rect = {
            width: width,
            height: height,
            area: function () {
                return rect.width * rect.height;
            },
            compareTo: function (other) {
                return other.area() - rect.area() || other.width - rect.width;
            }
        };
        return rect;
    }

    let arr = [];
    for (let [width, height] of input) {
        arr.push(createRectangle(width, height));
    }

    let sortRectangles = arr.sort((a, b) => a.compareTo(b));
    return sortRectangles;
}

console.log(orderRectangles([[10,5],[5,12]]));