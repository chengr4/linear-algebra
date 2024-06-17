export function addVector(...vectors: number[][]) {
  // print each vector
  for (const index in vectors) {
    console.log(`vector${index}: `, vectors[index]);
  }

  const sum = vectors.reduce((preVector, currentVector) => {
    return preVector.map((value, index) => value + currentVector[index]);
  });
  console.log("sum", sum);

  return sum;
}