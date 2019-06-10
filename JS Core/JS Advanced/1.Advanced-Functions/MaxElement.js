function maxElement(arr) {
    let result = Math.max.apply(null, arr);
    console.log(result);
}

maxElement([10, 20, 5, 44, 123]);