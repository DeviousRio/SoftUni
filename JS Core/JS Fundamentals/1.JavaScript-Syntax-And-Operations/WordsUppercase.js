function solve(input) {
   console.log(input
    .toUpperCase()
    .split(/\W+/)
    .filter(w => w != '')
    .join(', '));
}

solve('javascript');