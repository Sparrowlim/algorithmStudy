function sol(arr) {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      array.push(arr[i] + arr[j]);
    }
  }
  const newArr = [...new Set(array)];
  return newArr.sort((a, b) => a - b);
}

console.log(sol([2, 1, 3, 4, 1]));
console.log(sol([5, 0, 2, 7]));
