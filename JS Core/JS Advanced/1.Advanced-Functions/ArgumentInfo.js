function argumentInfo() {
    let counts = {};

    for (let arg of arguments) {
        console.log(`${typeof(arg)}: ${arg}`);
        if (!counts[typeof(arg)]) {
            counts[typeof(arg)] = 1;
        } else {
            counts[typeof(arg)]++;
        }
    }
    // descending sort - if two types have same count we sort them in order of appearance
    Object.keys(counts).sort((a,b) => counts[b] - counts[a]).forEach(c => console.log(`${c} = ${counts[c]}`));
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });