import 'jest'
import Account from '../account'

const addTransaction = jest.fn()
const getAllTransactions = jest.fn()
const printTransactions = jest.fn()

let account: Account;

beforeEach(function () {
    account = new Account({addTransaction, getAllTransactions}, {printTransactions})
});

afterEach(function () {
    jest.clearAllMocks()
});

it('adds a transaction to the transaction-repository for a deposit', () => {
    account.deposit(100)

    expect(addTransaction).toBeCalledWith(100)
})

it('adds a transaction to the transaction-repository for a withdrawal', () => {
    account.withdraw(100)

    expect(addTransaction).toBeCalledWith(-100)
})

it('calls the transactionPrinter with all transactions', () => {
    const transactions = ['transaction']
    getAllTransactions.mockReturnValue(transactions)

    account.printStatement()

    expect(printTransactions).toBeCalledWith(transactions)
})
