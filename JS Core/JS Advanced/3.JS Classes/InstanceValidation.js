class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(clientIdDigitCode) {
        if (clientIdDigitCode.length !== 6 && !Number.isInteger(clientIdDigitCode)) {
            throw new TypeError('Client ID must be a 6-digit number');
        }
        this._clientId = clientIdDigitCode;
    }

    get email() {
        return this._email;
    }

    set email(clientEmail) {
        let emailPatern = /^\w+@[a-zA-Z.]+$/;
        if (!emailPatern.test(clientEmail)) {
            throw new TypeError('Invalid e-mail');
        }
        this._email = clientEmail;
    }

    get firstname() {
        return this._firstName;
    }

    set firstName(clientFirstName) {
        if (clientFirstName.length < 3 || clientFirstName.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }

        let pattern = /^[A-Za-z]+$/;

        if (!pattern.test(clientFirstName)) {
            throw new TypeError('First name must contain only Latin characters');
        }
        this._firstName = clientFirstName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(clientLastName) {
        if (clientLastName.length < 3 || clientLastName.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }

        let pattern = /^[A-Za-z]+$/;

        if (!pattern.test(clientLastName)) {
            throw new TypeError('Last name must contain only Latin characters');
        }
        this._lastName = clientLastName;
    }
}

let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');
console.log(acc);