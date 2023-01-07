export class Car {
  fuelSpent: number;
  fuelTank: number;

  constructor(fuelSpent: number) {
    this.fuelSpent = fuelSpent;
    this.fuelTank = 0;
  }

  toDrive(distance: number) {
    if (
      distance >
      this.fuelSpent * this.fuelTank
    ) {
      console.log(
        `Não temos combustivel suficiente para rodar`
      );
      return;
    }
    let traveled = distance / this.fuelSpent;
    console.log(
      `Distancia percorrida de ${distance} Km`
    );
    this.fuelTank -= traveled;
  }

  toAddFuel(liter: number) {
    this.fuelTank += liter;
    console.log(
      `Veículo abastecido! ${this.fuelTank} litros no tanque.`
    );
  }

  toShowFuel() {
    console.log(
      `Combustível restante: ${this.fuelTank} litros`
    );
  }
}
