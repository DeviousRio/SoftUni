function solve() {
    let btnElement = document.getElementsByTagName('button')[0];
    btnElement.addEventListener('click', getMyCards);

    let allCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let heartOption = document.getElementsByTagName('option')[0];
    let spadeOption = document.getElementsByTagName('option')[1];
    let diamondOption = document.getElementsByTagName('option')[2];
    let clubOption = document.getElementsByTagName('option')[3];

    let heart = heartOption.textContent.split(' ')[1];
    let spade = spadeOption.textContent.split(' ')[1];
    let diamond = diamondOption.textContent.split(' ')[1];
    let club = clubOption.textContent.split(' ')[1];


    function getMyCards() {
        let fromElement = document.getElementById('from').value;
        let toElement = document.getElementById('to').value;
        let outputSection = document.getElementById('cards');

        let startCard = allCards.indexOf(fromElement);
        let endCard = allCards.indexOf(toElement) + 1;
        let myCards = allCards.slice(startCard, endCard);

        for (let card of myCards) {
            let cardDivElement = document.createElement('div');
            let firstParagraphElement = document.createElement('p');
            let secondParagraphElement = document.createElement('p');
            let thirdParagraphElement = document.createElement('p');

            cardDivElement.setAttribute('class', 'card');
            thirdParagraphElement.textContent = card;

            if (heartOption.selected) {
                firstParagraphElement.textContent = heart;
                secondParagraphElement.textContent = heart;
            } else if (spadeOption.selected) {
                firstParagraphElement.textContent = spade;
                secondParagraphElement.textContent = spade;
            } else if (diamondOption.selected) {
                firstParagraphElement.textContent = diamond;
                secondParagraphElement.textContent = diamond;
            } else if (clubOption.selected) {
                firstParagraphElement.textContent = club;
                secondParagraphElement.textContent = club;
            }

            cardDivElement.appendChild(firstParagraphElement);
            cardDivElement.appendChild(thirdParagraphElement);
            cardDivElement.appendChild(secondParagraphElement);

            outputSection.appendChild(cardDivElement);
        }
    }

    document.getElementById('from').value = '';
    document.getElementById('to').value = '';
}