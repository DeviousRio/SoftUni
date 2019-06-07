function solve() {
    const url = 'https://judgetests.firebaseio.com/schedule/';
    let currentStopId = 'depot';
    let currentStopName;

    function depart() {
        $.ajax({
            url: url + currentStopId + '.json',
            method: 'GET',
            success: nextStop
        });
    }

    function arrive() {
        $('.info').text(`Arriving at ${currentStopName.name}`);
        currentStopId = currentStopName.next;
        switchButtons('arrive', 'depart');
    }

    function nextStop(data) {
        currentStopName = data;
        $('.info').text(`Next stop ${currentStopName.name}`);
        switchButtons('depart', 'arrive');
    }

    function switchButtons(disable, enable) {
        $(`#${disable}`).attr('disabled', true);
        $(`#${enable}`).attr('disabled', false);
    }

    return {
        depart,
        arrive
    };
}