function solve(name, weight, price) {
    let totalPrice = (weight * price) * 0.001;
    let newWeight = weight * 0.001;
    console.log(`I need ${totalPrice.toFixed(2)} leva to buy ${newWeight.toFixed(2)} kilograms ${name}.`)
}

solve('orange', 2500, 1.80);