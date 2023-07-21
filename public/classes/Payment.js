export class Payments {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `Payment to ${this.recipient} cost ${this.amount}, for the following reason:\n${this.details}`;
    }
}
