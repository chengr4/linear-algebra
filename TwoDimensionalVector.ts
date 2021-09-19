class TwoDimensionalVector {
  private v: number[][];

  constructor(value: number[][]) {
    this.v = value;
  }

  get value() {
    return this.v;
  }

  set value(newValue: number[][]) {
    this.v = newValue;
  }
}