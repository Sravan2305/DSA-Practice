var maxAreaOfIsland = function (grid) {
  let max = 0,
    rows = grid.length,
    cols = grid[0].length;
  let moves = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  for (let i = 0; i < rows; i++)
    for (let j = 0; j < cols; j++)
      if (grid[i][j] === 1) {
        const ans = dfs(i, j);
        // if (ans > max) console.log(i, j, ans);
        max = Math.max(max, ans);
      }
  function dfs(i, j) {
    if (grid[i][j] !== 1) return 0;
    grid[i][j] = -1;
    let max = 1;
    for (let [dx, dy] of moves) {
      if (i + dx < 0 || i + dx >= rows || j + dy < 0 || j + dy >= cols)
        continue;
      max += dfs(i + dx, j + dy);
    }
    return max;
  }
  return max;
};