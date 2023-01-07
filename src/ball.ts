export class Ball {
  color: string;
  size: number;
  material: string;

  constructor(
    color: string,
    size: number,
    material: string
  ) {
    this.color = color;
    this.size = size;
    this.material = material;
  }

  showColor() {
    console.log(`A cor da bola é: ${this.color}`);
  }

  changeColor(newColor: string) {
    this.color = newColor;
    console.log(`A nova cor é: ${this.color}`);
  }
}
