import TransactionRepository from './transaction-repository';
import {TransactionPrinter} from "./transaction-printer"

interface Account {
    deposit(amount:number): void
    withdraw(amount:number): void
    printStatement(): void
}

export default class implements Account {
    private transactionRepository: TransactionRepository
    private transactionPrinter: TransactionPrinter

    constructor(transactionRepository: TransactionRepository, transactionPrinter: TransactionPrinter) {
        this.transactionRepository = transactionRepository
        this.transactionPrinter = transactionPrinter

    }
    deposit(amount: number): void {
        this.transactionRepository.addTransaction(amount);
    }
    printStatement(): void {
        const allTransactions = this.transactionRepository.getAllTransactions()
        this.transactionPrinter.printTransactions(allTransactions)
    }
    withdraw(amount: number): void {
        this.transactionRepository.addTransaction(-amount);
    }
}
