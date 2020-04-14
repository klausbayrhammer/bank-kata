import {Transaction} from "./transaction"

export default class TransactionRepository {
    addTransaction(value: number): void {
        throw new Error('not implemented')
    }
    getAllTransactions(): Transaction[] {
        throw new Error('not implemented')
    }
}
