function busRoute() {
    let firstBusStop = $('#enter-stops > label:nth-child(2) > input[type="number"]');
    let lastBusStop = $('#enter-stops > label:nth-child(3) > input[type="number"]');
    let busStops = $('#selected-bus-stops');
    let spanElement = $('#selected-route > span');

    let start = +firstBusStop.val();
    let end = +lastBusStop.val();
    let listOfBusStops = $('#bus-stops').children().length;

    if (start !== 0 && end !== 0 && start >= 0 && end <= listOfBusStops) {
        busStops.empty();
        spanElement.text(`${start}-${end}`);

        for (let i = start; i <= end; i++) {
            let everyRow = $(`#bus-stops >li:eq(${i-1})`).text();
            busStops.append(`<li>${everyRow}</li>`);
        }

        firstBusStop.val('');
        lastBusStop.val('');
    }
}

$(() => {
    let busStops = [
        "Gen. Gurko St.",
        "Sofia University",
        "Eagles' Bridge Sq.",
        "Bulgarian News Agency",
        "Peyo Yavorov Blvd.",
        "Aleksandar Zhendov Bvld.",
        // You can add/remove bus stops from here
    ]

    let listBusStops = $('#bus-stops')
    for (let i = 0; i < busStops.length; i++) {
        const busStopLi = $('<li>').text(busStops[i]);

        listBusStops.append(busStopLi)
    }
})