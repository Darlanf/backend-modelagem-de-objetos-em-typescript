export enum FuelType {
  Gasolina = "gasolina",
  Alcool = "alcool",
  Diesel = "diesel",
}

export class Fuel {
  fuelType: FuelType;
  literCost: number;
  fuelReserve: number;

  constructor(
    fuelType: FuelType,
    literCost: number,
    fuelReserve: number
  ) {
    this.fuelType = fuelType;
    this.literCost = literCost;
    this.fuelReserve = fuelReserve;
  }

  toFuelByValue(cost: number) {
    let litersOfFuel = cost / this.literCost;
    if (this.fuelReserve < litersOfFuel) {
      console.log("Não é possivel abastecer");
      return;
    }
    this.fuelReserve -= litersOfFuel;
    console.log(
      `Abastecimento realizado com sucesso! R$ ${cost} = ${litersOfFuel} litros`
    );
  }
  toFuelByLiter(liter: number) {
    if (this.fuelReserve < liter) {
      console.log("Não é possivel abastecer");
      return;
    }
    let costOfFuel = liter * this.literCost;
    this.fuelReserve -= liter;
    console.log(
      `Abastecimento realizado com sucesso! R$ ${costOfFuel} = ${liter} litros`
    );
  }
  toChangeLiterCost(newValue: number) {
    if (newValue < 0) {
      console.log(
        `O preço do combustivel não pode ser menor que zero`
      );
    }
    this.literCost = newValue;
    console.log(
      `Preço atualizado com sucesso! R$ ${this.literCost}`
    );
  }
  toChangeFuelType(newFuelType: FuelType) {
    this.fuelType = newFuelType;
    console.log(
      `Combustivel trocado com sucesso! ${this.fuelType}`
    );
  }
  toChangeFuelReserve(newValue: number) {
    this.fuelReserve += newValue;
    console.log(
      `Bomba reabastecida! ${this.fuelReserve}`
    );
  }
}
