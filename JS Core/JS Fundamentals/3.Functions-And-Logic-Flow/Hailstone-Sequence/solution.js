function getNext() {
    let inputElement = document.getElementById('num');
    let btnElement = document.querySelector(`#exercise > form > input[type="button"]`);
    btnElement.addEventListener('click', Calculate());

    function Calculate() {
        let inputValue = inputElement.value;
        let result = document.getElementById('result');

        while (inputValue) {
            result.textContent += inputValue + ' ';

            if (inputValue % 2 === 0) {
                inputValue = inputValue / 2;
            } else if (inputValue % 2 === 1) {
                inputValue = (3 * inputValue) + 1;
            }
            if (inputValue === 1) {
                result.textContent += inputValue + ' ';
                break;
            }
        }
    }
}