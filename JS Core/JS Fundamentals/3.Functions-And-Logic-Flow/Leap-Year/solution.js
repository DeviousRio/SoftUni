function leapYear() {
    let button = document.querySelector('#exercise button').addEventListener('click', checkTheYear);

    function checkTheYear() {

        let year = document.querySelector('#exercise input');
        let yearValue = year.value;
        let isLeap = ((yearValue % 4 == 0) && (yearValue % 100 != 0)) || (yearValue % 400 == 0);

        let h2 = document.querySelector('#year h2');

        if (isLeap) {
            h2.textContent = 'Leap Year';
        } else {
            h2.textContent = 'Not Leap Year';
        }

        let divContainer = document.querySelector('#year div');
        divContainer.textContent = year.value;
        year.value = '';
    }
}