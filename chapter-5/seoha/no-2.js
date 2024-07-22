
function sol(arr) {
  const newArr = [...new Set(arr)];
  return newArr.sort((a, b) => b - a);
}

console.log(sol([4, 2, 2, 1, 3, 4]));
console.log(sol([2, 1, 1, 3, 2, 5, 4]));
