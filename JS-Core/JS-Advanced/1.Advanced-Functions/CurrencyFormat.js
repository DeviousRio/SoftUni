function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);

    if (symbolFirst) {
        console.log(symbol + " " + result);
    } else {
        console.log(result + " " + symbol);
    }
}

currencyFormatter(',', '$', true, 5345);