arr1 = [
  [1, 4],
  [3, 2],
  [4, 1],
];

arr2 = [
  [3, 3],
  [3, 3],
];

arr3 = [
  [2, 3, 2],
  [4, 2, 4],
  [3, 1, 4],
];

arr4 = [
  [5, 4, 3],
  [2, 4, 1],
  [3, 1, 1],
];

function solution(arr1, arr2) {
  const c1 = arr1[0].length;
  const r1 = arr1.length;

  const c2 = arr2[0].length;
  const r2 = arr2.length;

  const ret = [];
  for (let i = 0; i < r1; i++) {
    ret.push(new Array(c2).fill(0));
  }

  for (let i = 0; i < r1; i++) {
    for (let j = 0; i < c2; j++) {
      for (let k = 0; k < c1; k++) {
        ret[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return ret;
}

const result = solution(arr1, arr2);
