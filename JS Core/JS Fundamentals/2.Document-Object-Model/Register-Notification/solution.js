function register() {
    let usernameElement = document.getElementById('username');
    let usernameValue = usernameElement.value;

    let emailElement = document.getElementById('email');
    let emailValue = emailElement.value;

    let passwordElement = document.getElementById('password');
    let passwordValue = passwordElement.value;

    let resultSection = document.getElementById('result');
    let pattern = /(.+)@(.+).(com|bg)/gm;

    if (usernameValue.length > 0 && passwordValue.length > 0 && emailValue.match(pattern)) {
        let passInAsterisks = '';

        for (let i = 0; i < passwordValue.length; i++) {
            passInAsterisks += '*';
        }

        let h1Element = document.createElement('h1');
        h1Element.innerHTML = 'Successful Registration!';
        resultSection.appendChild(h1Element);

        resultSection.innerHTML += `Username: ${usernameValue}`;
        resultSection.appendChild(document.createElement('br'));

        resultSection.innerHTML += `Email: ${emailValue}`;
        resultSection.appendChild(document.createElement('br'));

        resultSection.innerHTML += `Password: ${passInAsterisks}`;

        usernameElement.value = '';
        emailElement.value = '';
        passwordElement.value = '';

        setTimeout(() => {
            resultSection.textContent = '';
        }, 5000);
    }
}