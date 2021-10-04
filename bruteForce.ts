/**
 * 解二元一次聯立方程式
 * @param f1 二元一次方程式
 * @param f2 二元一次方程式
 * @returns x y 的值
 */
export function twoUnknowns(f1: Function, f2: Function) {
  for (let i = -10000; i < 10000; i++) {
    for (let j = -10000; j < 10000; j++) {
      if(f1(i, j) && f2(i,j)) return console.log(`x: ${i}, y: ${j} `);
    }
  }
  return console.log("Answer no found");
}

export function solveColPicture(f: Function) {
  for (let i = -1000; i < 1000; i++) {
    for (let j = -1000; j < 1000; j++) {
      if(f(i, j)) return console.log(`x: ${i}, y: ${j} `);
    }
  }
  return console.log("Answer no found");
}
