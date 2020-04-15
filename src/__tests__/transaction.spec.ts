import 'jest'
import {Transaction} from "../transaction"

function mockDate(dateString: string) {
    jest.spyOn(Date, 'now').mockImplementation(() => (new Date(dateString)).getTime())
}

it('initializes a transaction with the current date', () => {
    mockDate('1.1.2020')
    const transaction = new Transaction(100)
    expect(transaction.amount).toEqual(100)
    expect(transaction.date).toEqual(new Date('1.1.2020'))
})
