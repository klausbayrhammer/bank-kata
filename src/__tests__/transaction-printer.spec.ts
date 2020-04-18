import 'jest'
import TransactionPrinter from '../transaction-printer'

const formatTransactions = jest.fn()

const transactionPrinter = new TransactionPrinter({formatTransactions})

it('prints the header if no transactions are passed', () => {
    spyOn(console, 'log')
    formatTransactions.mockReturnValue(['formattedTransaction'])

    transactionPrinter.printTransactions([])

    expect(console.log).toBeCalledWith('Date||Amount||Balance\nformattedTransaction')
})
