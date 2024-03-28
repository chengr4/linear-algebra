import Vector from "../Vector";
import { twoUnknowns, solve2DColPicture, solve3DColPicture } from "../pkg/bruteForce/bruteForce";
import { addVector } from "../cal";
// column vector
const v1: number[] = [...new Array(2)].map(() =>
  Math.floor(Math.random() * 10)
);
const v2: number[] = [...new Array(2)].map(() =>
  Math.floor(Math.random() * 10)
);
const v3: number[] = [...new Array(2)].map(() =>
  Math.floor(Math.random() * 10)
);
const v4: number[] = [...new Array(2)].map(() =>
  Math.floor(Math.random() * 10)
);

addVector(v1, v2, v3, v4);

const scalar = 2;

function scalarMultiplication(vector: number[], scalar: number) {
  console.log("vector: ", vector);

  const result = vector.map((value) => value * scalar);
  console.log("Multiplicated vector ", result);

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
const f1 = (x: number, y: number) => (x - 2 * y) === 1;
const f2 = (x: number, y: number) => (3 * x + 2 * y) === 11;
twoUnknowns(f1, f2); // x: 3, y: 1

// v8 + v9 = v10
const v8 = [
  [1, -2],
  [3, 2],
]; // v8 is a matrix
const v9 = ["x", "y"];
const v10 = [1, 11];

/**
 * Col picture: 找到線組合 (linear combination)
 * x 倍的 [1, 3] 和 y 倍的 [-2, 2] 相加 = v10 ([1, 11])
 * @param x x 倍的 [1, 3]
 * @param y y 倍的 [-2, 2]
 * @returns {boolean} Whether match v10
 * 
 * Ans: x = 3, y = 1
 */
function colPictureV10(x: number, y: number) {
  const v11 = [1, 3].map((value) => value * x);
  const v12 = [-2, 2].map((value) => value * y);
  const v13 = addVector(v11, v12);
  for (const i in v13) {
    // when one value is different, search new ans
    if (v13[i] !== v10[i]) return false;
  }
  return true;
}

// solve2DColPicture(colPictureV10);

// 向量 v15, v16, v17 做什麼樣的「線性組合」能得到 v14?
// x = 1, y = 1, z = 2
function colPictureV14(x: number, y: number, z: number) {
  const v14 = [5, -2, 9];
  const v15 = [2, 4, -2].map((value) => value * x);
  const v16 = [1, -6, 7].map((value) => value * y);
  const v17 = [1, 0, 2].map((value) => value * z);
  const v18 = addVector(v15, v16, v17);
  for (const i in v18) {
    // when one value is different, search new ans
    if (v18[i] !== v14[i]) return false;
  }
  return true;
}

solve3DColPicture(colPictureV14);

/* Gaussian Elimination
2x + 4y - 2z = 2 (pivot = 2x)
4x + 9y - 3z = 8
-2x - 3y + 7z = 10

2x + 4y - 2z = 2
      y +  z = 4 (x * -2) (pivot = y)
      y + 5z = 12 (x * 1)

2x + 4y - 2z = 2
      y +  z = 4 
          4z = 8 (y * -1) (pivot = 4z)

pivots 有意義

Then do backward substitution, we will get
z = 2, y = 2, x = -1
*/


