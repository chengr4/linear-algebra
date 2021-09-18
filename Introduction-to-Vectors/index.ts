
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
}

addVector(v1, v2, v3 , v4);
