function solve(dayOfWeek, service, time) {
    let price;

    switch (dayOfWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (service == "Fitness") {
                if (time >= 8 && time <= 15) {
                    price = 5;
                } else {
                    price = 7.50;
                }
            } else if (service == "Sauna") {
                if (time >= 8 && time <= 15) {
                    price = 4;
                } else {
                    price = 6.5;
                }
            } else {
                if (time >= 8 && time <= 15) {
                    price = 10;
                } else {
                    price = 12.5;
                }
            }
            break;

        case "Saturday":
        case "Sunday":
            if (service == "Fitness") {
                price = 8;
            } else if (service == "Sauna") {
                price = 7;
            } else {
                price = 15;
            }
            break;
    }
    console.log(price);
}

solve('Monday', 'Sauna', 15.30);