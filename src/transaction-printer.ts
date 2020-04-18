import {Transaction} from "./transaction"
import TransactionFormatter from "./transaction-formatter"

export default class TransactionPrinter {
    private transactionFormatter: TransactionFormatter
    constructor(transactionFormatter: TransactionFormatter) {
        this.transactionFormatter = transactionFormatter
    }

    printTransactions(transactions: Transaction[]): void {
        const header = 'Date||Amount||Balance'
        const formattedTransactions = this.transactionFormatter.formatTransactions(transactions)
        console.log([header, ...formattedTransactions].join('\n'))
    }
}
