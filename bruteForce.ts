export function twoUnknowns(f1: Function, f2: Function) {
  for (let i = -10000; i < 10000; i++) {
    for (let j = -10000; j < 10000; j++) {
      if(f1(i, j) && f2(i,j)) return console.log('Ans: ', [i, j]);
    }
  }
  return new Error("Answer no found");
}
