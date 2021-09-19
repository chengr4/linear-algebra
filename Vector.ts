class Vector {
  private v: number[];

  constructor(value: number) {
    this.v = [...new Array(value)].map(() => Math.floor(Math.random() * 10));
  }

  get value() {
    return this.v;
  }

  printVector() {
    console.log("my vector", this.v);
  }

  addVector(...vectors: number[][]) {
    console.log("##Add Vectors##");
    this.printVector();

    for (const index in vectors) {
      if (this.v.length !== vectors[index].length)
        throw "One fo vectors has different length from the others";
      console.log("add vector: ", vectors[index]);
    }

    // sum expect the first vector itself
    const OthersSum = vectors.reduce((preVector, currentVector) => {
      return preVector.map((value, index) => value + currentVector[index]);
    });

    const finalSum = this.v.map((value, index) => value + OthersSum[index]);
    console.log("Sum", finalSum);

    return finalSum;
  }

  scalarMultiplication(scalar: number) {
    this.printVector();

    const result = this.v.map((value) => value * scalar);
    console.log("Multiplicated vector ", result);

    return result;
  }
}
