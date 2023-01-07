export class Account {
  accountNumber: number;
  userName: string;
  balance: number = 0;

  constructor(account: number, name: string) {
    this.accountNumber = account;
    this.userName = name;
    this.balance = 0;
  }

  changeName(newName: string) {
    this.userName = newName;
    console.log(
      `Um novo nome de usuário foi definido: ${this.userName}`
    );
  }

  deposit(value: number) {
    this.balance += value;
    console.log(
      `Depósito realizado! Novo saldo: ${this.balance}`
    );
  }
  withdraw(value: number) {
    if (
      this.balance <= 0 ||
      this.balance < value
    ) {
      console.log(
        `Operação não realizada! Saldo insuficiente! Deposite novos valores antes de sacar`
      );
      return;
    }
    this.balance -= value;
    console.log(
      `Saque realizado! Novo saldo: ${this.balance}`
    );
  }
}
