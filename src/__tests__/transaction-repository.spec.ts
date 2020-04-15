import 'jest'
import TransactionRepository from "../transaction-repository"

it('getAllTransactions returns an empty list if no transactions have been added', () => {
    const transactionRepository = new TransactionRepository()
    expect(transactionRepository.getAllTransactions()).toEqual([])
})

it('returns a single transaction if one transaction has been added before', () => {
    const transactionRepository = new TransactionRepository()
    transactionRepository.addTransaction(100)
    expect(transactionRepository.getAllTransactions().length).toEqual(1)
    expect(transactionRepository.getAllTransactions()[0].amount).toEqual(100)
})
