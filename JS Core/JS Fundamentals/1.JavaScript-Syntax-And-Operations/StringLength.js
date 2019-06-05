function solve(firstArgument, secondArgument, thirdArgument) {
    let firstLength = firstArgument.length;
    let secondLength = secondArgument.length;
    let thirdLength = thirdArgument.length;

    let sumLength = firstLength + secondLength + thirdLength;
    let averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');