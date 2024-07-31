function solution(N, stages) {
  const challenger = new Array(N + 2).fill(0);
  for (const stage of stages) {
    challenger[stage] += 1;
  }

  const fails = {};
  let total = stages.length;

  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      fails[i] = 0;
      continue;
    }

    fails[i] = challenger[i] / total;

    total -= challenger[i];
  }

  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);

  return result.map((v) => Number(v[0]));
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); //3, 4, 2, 1, 5
console.log(solution(4, [4, 4, 4, 4])); //4, 1, 2, 3
