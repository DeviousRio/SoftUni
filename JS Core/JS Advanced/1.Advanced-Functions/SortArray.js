function sortArray(inputArray, sortMethod) {

    let ascendingComparator = function (a, b) {
        return a - b;
    };

    let descendingComparator = function (a, b) {
        return b - a;
    };

    let sortingStrategies = {
        'asc': ascendingComparator,
        'desc': descendingComparator
    };

     console.log(inputArray.sort(sortingStrategies[sortMethod]));
}

sortArray([14, 7, 17, 6, 8], 'asc');