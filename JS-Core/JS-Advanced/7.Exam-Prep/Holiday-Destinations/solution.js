function addDestination() {
    let cityInput = $('#input > input:nth-child(2)');
    let countryInput = $('#input > input:nth-child(4)');
    let seasonsOptions = $('#seasons option:selected');

    let destinationsList = $('#destinationsList');
    let tr = $('<tr>');

    let summerCounter = $('#summer');
    let currentSummerPoints = 1;

    let autumnCounter = $('#autumn');
    let currentAutumnPoints = 1;

    let winterCounter = $('#winter');
    let currentWinterPoints = 1;

    let springCounter = $('#spring');
    let currentSpringPoints = 1;

    if (cityInput.val() && countryInput.val()) {

        if (seasonsOptions.val() === 'summer') {
            tr.append(`<td>${cityInput.val()}, ${countryInput.val()}</td>`);
            tr.append(`<td>Summer</td>`);
            destinationsList.append(tr);

            currentSummerPoints += +summerCounter.val();
            summerCounter.val(currentSummerPoints);
        }

        if (seasonsOptions.val() === 'autumn') {
            tr.append(`<td>${cityInput.val()}, ${countryInput.val()}</td>`);
            tr.append(`<td>Autumn</td>`);
            destinationsList.append(tr);

            currentAutumnPoints += +autumnCounter.val();
            autumnCounter.val(currentAutumnPoints);
        }

        if (seasonsOptions.val() === 'winter') {
            tr.append(`<td>${cityInput.val()}, ${countryInput.val()}</td>`);
            tr.append(`<td>Winter</td>`);
            destinationsList.append(tr);

            currentWinterPoints += +winterCounter.val();
            winterCounter.val(currentWinterPoints);
        }

        if (seasonsOptions.val() === 'spring') {
            tr.append(`<td>${cityInput.val()}, ${countryInput.val()}</td>`);
            tr.append(`<td>Spring</td>`);
            destinationsList.append(tr);

            currentSpringPoints += +springCounter.val();
            springCounter.val(currentSpringPoints);
        }
    }

    cityInput.val('');
    countryInput.val('');
}