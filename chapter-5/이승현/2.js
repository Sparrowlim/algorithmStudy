function solution(answers) {
  const supo1 = [1, 2, 3, 4, 5];
  const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const supo = [supo1, supo2, supo3];
  let result = [0, 0, 0];

  // entries는 [index, value]를 반환
  // 정답 배열과 수포자 배열을 비교하여 정답이 맞으면 result 배열에 1씩 증가
  for (let [i, a] of answers.entries()) {
    for (let [j, s] of supo.entries()) {
      if (a === s[i % s.length]) result[j]++;
    }
  }

  // 가장 높은 개수 반환
  const maxNumber = Math.max(...result);

  // 가장 높은 개수를 가진 수포자 번호 반환
  return (
    result
      .map((v, i) => {
        if (v === maxNumber) return i + 1;
        return 0;
      })
      .filter((v) => v !== 0)
      // 오름차순으로 정렬
      .sort((a, b) => a - b)
  );
}
