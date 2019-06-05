function greatestCD() {
    let firstNumElement = document.getElementById('num1').value;
    let secondNumElement = document.getElementById('num2').value;
    let result = document.getElementById('result');
    let btnElement = document.querySelector('#exercise form input[type="button"]');
    btnElement.addEventListener('click', findGCD());
    result.textContent = findGCD(firstNumElement, secondNumElement);

    function findGCD(a, b) {
        if (!b) {
            return a;
        }
        return findGCD(b, a % b);
    }
}