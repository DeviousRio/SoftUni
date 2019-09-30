function solve(input) {
    let result = [];
    let addCommand = 'add';
    let removeCommand = 'remove';

    for (let i = 0; i < input.length; i++) {
        if (input[i] === addCommand) {
            result.push(i + 1);
        } else if (input[i] === removeCommand) {
            result.pop();
        }
    }

    if (!input.includes(addCommand) || result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    } 
}

solve(['add', 'add', 'remove', 'add', 'add']);