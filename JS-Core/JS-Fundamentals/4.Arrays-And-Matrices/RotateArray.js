function solve(arr) {
    let numberOfRotations = +arr.pop();

    for (let i = 0; i < numberOfRotations % arr.length; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));
}

solve(['1', '2', '3', '4', '2']);