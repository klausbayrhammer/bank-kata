export class Transaction {
    date: Date
    amount: number

    constructor(amount: number) {
        this.amount = amount
        this.date = new Date(Date.now())
    }
}
