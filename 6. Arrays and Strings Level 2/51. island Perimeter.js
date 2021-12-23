let grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];

let permimeter = 0;

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[0].length; j++) {
    if (grid[i][j] == 1) {
      permimeter += 4;
      //checking for top grid;
      if (i > 0 && grid[i - 1][j] == 1) permimeter -= 2;

      // checking for left island
      if (j > 0 && grid[i][j - 1] == 1) permimeter -= 2;
    }
  }
}

console.log(permimeter);
