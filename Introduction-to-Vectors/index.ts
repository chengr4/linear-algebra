import Vector from '../Vector';

// column vector
const v1: number[] = [...new Array(2)].map(() => Math.floor(Math.random()*10));
const v2: number[] = [...new Array(2)].map(() => Math.floor(Math.random()*10));
const v3: number[] = [...new Array(2)].map(() => Math.floor(Math.random()*10));
const v4: number[] = [...new Array(2)].map(() => Math.floor(Math.random()*10));

function addVector(...vectors: number[][]) {
  // print each vector
  for(const index in vectors) {
    console.log(`vector${index}: `, vectors[index]);
  }
  
  const sum = vectors.reduce((preVector, currentVector) => {
    return preVector.map((value, index) => value + currentVector[index]);
  });
  console.log('sum', sum);

  return sum;
}

addVector(v1, v2, v3 , v4);

const scalar = 2;

function scalarMultiplication(vector: number[], scalar: number) {
console.log('vector: ', vector);


  const result = vector.map(value => value * scalar);
  console.log("Multiplicated vector ",result);

  return result;
}

scalarMultiplication(v1, scalar);

const v5 = new Vector(2);
const v6 = new Vector(2);

// linear combination (cv + dw = [cv1+dw1, cv2+dw2])
const v7 = v5.scalarMultiplication(3).addVector(v6.scalarMultiplication(4)); 
console.log("v7", v7);

// Linear Equations

// x - 2y = 1
// 3x + 2y = 11

