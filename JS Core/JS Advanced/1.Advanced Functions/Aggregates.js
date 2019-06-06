function aggregate(arr) {
    // Sum
    console.log('Sum = ' + arr.reduce((acc, c) => acc + c));
    // Min
    console.log('Min = ' + arr.reduce((acc, c) => Math.min(acc, c)));
    // Max
    console.log('Max = ' + arr.reduce((acc, c) => Math.max(acc, c)));
    // Product
    console.log('Product = ' + arr.reduce((acc, c) => acc * c));
    // Concat
    console.log('Join = ' + arr.reduce((acc, c) => '' + acc + c));
}

const myArr = [5, -3, 20, 7, 0.5];
aggregate(myArr);