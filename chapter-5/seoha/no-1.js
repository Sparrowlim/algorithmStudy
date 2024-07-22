function sol(arr) {
  // arr.sort(); 단순 sort시 문자열취급>>1, 10, 100, 2 발생 가능. 조건을 넣어줘야 함.
  arr.sort((a, b) => a - b);
  return arr;
}

console.log(sol([1, -5, 2, 4, 3]));
console.log(sol([2, 1, 1, 3, 2, 5, 4]));
console.log(sol([1, 6, 7]));
