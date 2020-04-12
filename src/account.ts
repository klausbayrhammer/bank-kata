interface Account {
    deposit(amount:number): void
    withdraw(amount:number): void
    printStatement(): void
}

export default class implements Account {
    deposit(amount: number): void {
        throw new Error('not implemented')
    }
    printStatement(): void {
        throw new Error('not implemented')
    }
    withdraw(amount: number): void {
        throw new Error('not implemented')
    }
}
