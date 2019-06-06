function solve(car) {
    let engineType = [{
        power: 90,
        volume: 1800
    }, {
        power: 120,
        volume: 2400
    }, {
        power: 200,
        volume: 3500
    }];

    let carriageType = [{
        type: 'hatchback',
        color: car.color
    }, {
        type: 'coupe',
        color: car.color
    }];

    let wheelsSize = car.wheelsize;
    if (wheelsSize % 2 === 0) {
        wheelsSize -= 1;
    }

    return {
        model: car.model,
        engine: engineType.filter(e => e.power >= car.power)[0],
        carriage: carriageType.filter(c => c.type == car.carriage)[0],
        wheels: [wheelsSize, wheelsSize, wheelsSize, wheelsSize]
    }
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));