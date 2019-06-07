function attachEventsListeners() {
    let days = $('#days');
    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');

    let convertedDays = 0;
    let convertedHours = 0;
    let convertedMinutes = 0;
    let convertedSeconds = 0;

    $('#daysBtn').on('click', convertDays);
    $('#hoursBtn').on('click', convertHours);
    $('#minutesBtn').on('click', convertMinutes);
    $('#secondsBtn').on('click', convertSeconds);

    function convertDays() {
        convertedHours = +days.val() * 24;
        convertedMinutes = +days.val() * 1440;
        convertedSeconds = +days.val() * 86400;
       
       hours.val(convertedHours);
       minutes.val(convertedMinutes);
       seconds.val(convertedSeconds);
    }

    function convertHours() {
        convertedDays = +hours.val() / 24;
        convertedMinutes = +hours.val() * 60;
        convertedSeconds =  convertedMinutes * 60;

        days.val(convertedDays);
        minutes.val(convertedMinutes);
        seconds.val(convertedSeconds);
    }

    function convertMinutes() {
        convertedHours = +minutes.val() / 60;
        convertedDays = convertedHours / 24;
        convertedSeconds = +minutes.val() * 60;
        
        days.val(convertedDays);
        hours.val(convertedHours);
        seconds.val(convertedSeconds);
    }

    function convertSeconds() {
        convertedMinutes = +seconds.val() / 60;
        convertedHours = convertedMinutes / 60;
        convertedDays = convertedHours / 24;
        
        days.val(convertedDays);
        hours.val(convertedHours);
        minutes.val(convertedMinutes);
    }
}