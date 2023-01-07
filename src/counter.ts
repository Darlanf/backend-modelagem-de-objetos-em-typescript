export class Counter {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  reset() {
    if (this.value <= 0) {
      console.log(
        "O valor já está zerado! Adicione novos valores!"
      );
      return;
    } else {
      this.value = 0;
      console.log("valores zerados");
    }
  }

  increment() {
    this.value++;
    console.log(
      `Valor incrementado para: ${this.value}`
    );
  }

  showValue() {
    console.log(`O valor atual é: ${this.value}`);
  }
}

//Nome da classe segue o padrão NomeDaClasse
//PascalCase

// nome de metodo e propriedade seguem o padrão nomeDoMetodo
//camelCase
