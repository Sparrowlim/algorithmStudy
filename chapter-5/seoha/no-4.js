function sol(array) {
  const pick = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const students = [0, 0, 0];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] === pick[i][j % pick[i].length]) {
        students[i]++;
      }
    }
  }

  const maxScore = Math.max(...students);
  const result = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i] === maxScore) {
      result.push(i + 1);
    }
  }

  return result;
}

console.log(sol([1, 2, 3, 4, 5]));
console.log(sol([1, 3, 2, 4, 2]));
