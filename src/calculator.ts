export class Calculator {
  historic: string[];
  digit: number;

  constructor() {
    this.historic = [];
    this.digit = 0;
  }

  add(value: number) {
    let result = value + this.digit;
    this.historic.push(
      ` ${this.digit} + ${value} = ${result}`
    );
    console.log(
      ` Soma realizada: ${this.digit} + ${value} = ${result}`
    );
    this.digit = result;
  }
  sub(value: number) {
    let result = this.digit - value;
    this.historic.push(
      ` ${this.digit} - ${value} = ${result}`
    );
    console.log(
      ` Subtração realizada: ${this.digit} - ${value} = ${result}`
    );
    this.digit = result;
  }
  mul(value: number) {
    let result = this.digit * value;
    this.historic.push(
      ` ${this.digit} x ${value} = ${result}`
    );
    console.log(
      ` Multiplicação realizada: ${this.digit} x ${value} = ${result}`
    );

    this.digit = result;
  }
  div(value: number) {
    if (value === 0) {
      console.log(
        "Não é possivel fazer a divisão"
      );
      return;
    }
    let result = this.digit / value;
    this.historic.push(
      ` ${this.digit} ÷ ${value} = ${result}`
    );
    console.log(
      ` Divisão realizada: ${this.digit} ÷ ${value} = ${result}`
    );
    this.digit = result;
  }
  show() {
    console.log(
      `Histórico de operações: ${this.historic}`
    );
  }
}
