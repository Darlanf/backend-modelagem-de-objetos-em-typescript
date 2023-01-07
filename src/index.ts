import { Account } from "./account";
import { Ball } from "./ball";
import { Calculator } from "./calculator";
import { Car } from "./car";
import { Counter } from "./counter";
import { Fuel, FuelType } from "./fuel";

console.log("======> Exercício #1 <======");

let counter1 = new Counter(0);
console.log(
  `O valor de Counter1 é: ${counter1.value}`
);

counter1.reset();

counter1.value = 5;

counter1.showValue();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.reset();

console.log("======> Exercício #2 <======");

let ball1 = new Ball("azul", 10, "couro");

console.log(ball1);

ball1.showColor();
ball1.changeColor("preta");
ball1.showColor();

console.log("======> Exercício #3 <======");

let account1 = new Account(123, "teste");
console.log(account1);

account1.changeName("Darlan");
account1.deposit(50);
account1.deposit(100);
account1.withdraw(75);
account1.withdraw(80);

console.log("======> Exercício #4 <======");

const valores = new Calculator();
console.log(valores);

valores.add(100);

valores.sub(50);

valores.mul(5);

valores.div(10);

valores.show();

console.log("======> Exercício #5 <======");

let bomba1 = new Fuel(FuelType.Gasolina, 5, 100);
console.log(bomba1);

bomba1.toFuelByValue(50);
bomba1.toFuelByLiter(12);
bomba1.toChangeLiterCost(6);
bomba1.toFuelByValue(50);
bomba1.toFuelByLiter(12);
bomba1.toChangeFuelType(FuelType.Diesel);
console.log(bomba1);

bomba1.toChangeFuelReserve(100);

console.log("======> Exercício #6 <======");

let carro1 = new Car(10);
console.log(carro1);

carro1.toDrive(20);
carro1.toAddFuel(100);
console.log(carro1);

carro1.toDrive(20);
carro1.toShowFuel();
