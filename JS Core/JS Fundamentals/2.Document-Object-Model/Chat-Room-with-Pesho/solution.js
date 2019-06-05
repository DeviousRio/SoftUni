function solve() {
    let myButtonElement = document.querySelector('#exercise > button:nth-child(2)');
    myButtonElement.addEventListener('click', myText);

    let peshoButtonElement = document.querySelector('#exercise > button:nth-child(5)');
    peshoButtonElement.addEventListener('click', peshoText);

    let chronology = document.getElementById('chatChronology');

    function myText() {
        let myChatBox = document.getElementById('myChatBox').value;
        let divElement = document.createElement('div');

        let spanElement = document.createElement('span');
        spanElement.textContent = 'Me';

        let pElement = document.createElement('p');
        pElement.textContent = myChatBox;

        divElement.appendChild(spanElement);
        divElement.appendChild(pElement);
        divElement.style.textAlign = 'left'

        chronology.appendChild(divElement);
        document.getElementById('myChatBox').value = '';
    }

    function peshoText() {
        let peshoChatBox = document.getElementById('peshoChatBox').value;
        let divElement = document.createElement('div');

        let spanElement = document.createElement('span');
        spanElement.textContent = 'Pesho';

        let pElement = document.createElement('p');
        pElement.textContent = peshoChatBox;

        divElement.appendChild(spanElement);
        divElement.appendChild(pElement);
        divElement.style.textAlign = 'right';

        chronology.appendChild(divElement);
        document.getElementById('peshoChatBox').value = '';
    }
}