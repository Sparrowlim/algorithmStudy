// 10진수 받아 2진수로 변환
function solution(n) {
  const stack = [];
  //2로 나눴을 때 나머지가 0이면 0 1이면 1
  //몇번 반복할지 어떻게 정하지?
  const a = Math.sqrt(n);
  for (let i = 0; i < a; i++) {
    if (n % 2 === 0) {
      stack.push(0);
      n = n / 2;
    } else if (n % 2 === 1) {
      stack.push(1);
      n = (n - 1) / 2;
    }
  }
  const rev = [];
  for (let i = 0; i < stack.length; i++) {
    rev.push(stack[i]);
  }
  //앞뒤 바꿔서 리턴
  const ret = [];
  for (let i = 0; i < stack.length; i++) {
    if (rev.length === 0) {
      break;
    } else {
      ret[i] = rev.pop();
    }
  }
  return Number(ret.join(''));
}

console.log(solution(10)); //1010
console.log(solution(27)); //11011
console.log(solution(139)); //10001011
