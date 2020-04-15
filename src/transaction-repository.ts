import {Transaction} from "./transaction"

export default class TransactionRepository {
    private transactions: Transaction[] = []

    addTransaction(amount: number): void {
        const transaction = new Transaction(amount)
        this.transactions.push(transaction)
    }
    getAllTransactions(): Transaction[] {
        return this.transactions;
    }
}
