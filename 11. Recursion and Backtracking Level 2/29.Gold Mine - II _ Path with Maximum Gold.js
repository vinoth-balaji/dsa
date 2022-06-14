var getMaximumGold = function (grid) {
  let visited = [];
  let max = 0;
  for (let i = 0; i < grid.length; i++) visited.push([]);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] != 0 && visited[i][j] != true) {
        let bag = [];
        let gold = getGold(grid, i, j, visited);

        // console.log(bag);
        // let gold = 0;
        // for (let g of bag) gold += g;
        max = Math.max(max, gold);
      }
    }
  }

  return max;
};

var getGold = function (grid, i, j, visited) {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    visited[i][j] == true ||
    grid[i][j] == 0
  )
    return 0;

  let cost = grid[i][j];
  visited[i][j] = true;
  cost += Math.max(
    getGold(grid, i - 1, j, visited),
    getGold(grid, i, j - 1, visited),
    getGold(grid, i + 1, j, visited),
    getGold(grid, i, j + 1, visited)
  );
  visited[i][j] = false;

  return cost;
};

let grid = [
  [1, 0, 7],
  [2, 0, 6],
  [3, 4, 5],
  [0, 3, 0],
  [9, 0, 20],
];

console.log(getMaximumGold(grid));
