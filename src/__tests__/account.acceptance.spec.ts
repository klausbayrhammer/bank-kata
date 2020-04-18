import 'jest'
import Account from '../account'
import TransactionRepository from "../transaction-repository"
import TransactionPrinter from "../transaction-printer"
import TransactionFormatter from '../transaction-formatter'

function mockDate(dateString: string) {
    jest.spyOn(Date, 'now').mockImplementation(() => (new Date(dateString)).getTime())
}

it('shows a clients bank statement after he has deposited and withdrawn money on different days', () => {
    const accountService = new Account(new TransactionRepository(), new TransactionPrinter(new TransactionFormatter()))
    mockDate('10.01.2012')
    accountService.deposit(1000)
    mockDate('13.01.2012')
    accountService.deposit(2000)
    mockDate('14.01.2012')
    accountService.withdraw(500)
    spyOn(console, 'log')
    accountService.printStatement()
    expect(console.log).toBeCalledWith('Date||Amount||Balance\n14/01/2012||-500||2500\n13/01/2012||2000||3000\n10/01/2012||1000||1000')
});
