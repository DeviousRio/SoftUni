function getInfo() {
    $('#buses').text('');
    $('#stopName').text('');
    
    const url = 'https://judgetests.firebaseio.com/businfo/';

    let stopId = $('#stopId').val();
    $('#stopId').val('');

    $.ajax({
        url: url + stopId + '.json',
        method: 'GET',
        success: logData,
        error: handleError
    });

    function logData(data) {
        $('#stopName').text(data.name);
        for (let [key, value] of Object.entries(data.buses)) {
            $('#buses').append($(`<li>Bus ${key} arrives in ${value} minutes</li>`));
        }
    }

    function handleError(err) {
        $('#stopName').text('Error');
    }
}