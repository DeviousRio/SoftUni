function solve(ticketsDescription, sortingCriteria) {
    let tickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let ticket of ticketsDescription) {
        let ticketTokens = ticket.split('|');
        let destination = ticketTokens[0];
        let price = Number(ticketTokens[1]);
        let status = ticketTokens[2];

        tickets.push(new Ticket(destination, price, status));
    }
    return tickets = tickets.sort((a,b) => {
        if (a[sortingCriteria] < b[sortingCriteria]) {
            return -1;
        } else if (a[sortingCriteria] >  b[sortingCriteria]) {
            return 1;
        } else {
            return 0;
        }
    });
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'));

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'));