function binarySearch() {
    let arrayInput = document.getElementById('arr').value;
    let secondInput = document.getElementById('num').value;
    let result = document.getElementById('result');
    let buttonElement = document.querySelector('#exercise form input[type="button"]');
    buttonElement.addEventListener('click', Calculate());

    function Calculate() {
        if (arrayInput.includes(secondInput)) {
            arrayInput = arrayInput.split(', ');
            let indexOf = arrayInput.indexOf(secondInput);
            result.textContent = `Found ${secondInput} at index ${indexOf}`
        } else {
            result.textContent = `${secondInput} is not in the array`
        }
    }
}