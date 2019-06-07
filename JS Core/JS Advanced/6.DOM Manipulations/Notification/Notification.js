function notify(message) {
    $('#notification').text(`${message}`).css('display', 'block');
    setTimeout(disappearFunc, 2000);

    function disappearFunc() {
        $('#notification').css('display', 'none');
    }
}