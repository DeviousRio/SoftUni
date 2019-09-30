function attachEventsListeners() {
    $('#convert').on('click', convertFunction);

    let fromOptions = $('#inputDistance');
    let toOptions = $('#outputDistance');

    let inputUnits = $('#inputUnits');
    let outputUnits = $('#outputUnits');

    let obj = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    function convertFunction() {
        // cast the input to number
        let value = Number(fromOptions.val());
        // get fromValue inside the object which is equal with the selected options
        let fromValue = obj[inputUnits.val()];
        // get toValue inside the object which is equal with the selected options
        let toValue = obj[outputUnits.val()];

        let result = value * fromValue / toValue;
        toOptions.val(result);
    }
}