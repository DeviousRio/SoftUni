function printDeckOfCards(cards) {
    function makeCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };

        if (!faces.includes(face)) {
            let error = new Error('Error');
            error.card = face + suit;
            throw error;
        }

        if (!suits[suit]) {
            let error = new Error('Error');
            error.card = face + suit;
            throw error;
        }

        let card = {
            face: face,
            suit: suits[suit],
            toString: function () {
                return this.face + this.suit;
            }
        };

        return card;
    }

    try {
        let resultCards = cards.map(x => {
            let c = x.split('');
            let s = c.pop();

            return makeCard(c.join(''), s);
        });

        console.log(resultCards.join(' '));
    } catch (error) {
        console.log(`Invalid card: ${error.card}`);
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);