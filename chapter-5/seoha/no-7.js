function solution(root) {
  let x = 0, y = 0;
  const visitedPaths = new Set();

  const move = {
    'U': [0, 1],
    'D': [0, -1],
    'L': [-1, 0],
    'R': [1, 0]
  };

  for (let i = 0; i < root.length; i++) {
    const direction = root[i];
    const [dx, dy] = move[direction];
    const newX = x + dx;
    const newY = y + dy;
    
    if (newX >= -5 && newX <= 5 && newY >= -5 && newY <= 5) {
      const path1 = `${x},${y}-${newX},${newY}`;
      const path2 = `${newX},${newY}-${x},${y}`;
      
      visitedPaths.add(path1);
      visitedPaths.add(path2);

      x = newX;
      y = newY;
    }
  }

  return visitedPaths.size / 2;
}

console.log(solution('ULURRDLLU')); //7
console.log(solution('LULLLLLLU')); //7
