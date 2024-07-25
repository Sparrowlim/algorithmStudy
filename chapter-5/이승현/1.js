function solution(numbers) {
  var answer = [];
  const arr = [];
  // 1. 두 개의 수 뽑기
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      arr.push(numbers[i] + numbers[j]);
    }
  }
  // 2. arr 배열안의 데이터가 N^2개이고 이것을 정렬하기에 N^2(log(N^2))이다.
  return [...new Set(arr)].sort((a, b) => a - b);
}
