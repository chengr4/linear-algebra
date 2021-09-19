/**
 * I think use array is enough stop using this class
 */

export default class Vector {
  private v: number[];

  constructor(value?: number | number[]) {
    if(typeof value === 'number') this.v = [...new Array(value)].map(() => Math.floor(Math.random() * 10));
    if(Array.isArray(value)) this.v = value;
  }

  get value() {
    return this.v;
  }

  set value(newValue: number[]) {
    this.v = newValue;
  }

  printVector() {
    console.log("my vector: ", this.value);
  }

  addVector(...vectors: Vector[]): Vector {
    console.log("##Add Vectors##");
    this.printVector();

    for (const vector of vectors) {
      if (this.v.length !== vector.value.length)
        throw "One fo vectors has different length from the others";
      console.log("add vector: ", vector.value);
      this.value = vector.value.map((value, index) => value + this.value[index]);

    }
    console.log('Sum', this.value);
    
    return this;
  }

  scalarMultiplication(scalar: number): Vector {
    this.printVector();

    const result = new Vector();
    result.value = this.v.map((value) => value * scalar);
    console.log(`Multiplicated vector * ${scalar}`, result.value);

    return result;
  }
}
