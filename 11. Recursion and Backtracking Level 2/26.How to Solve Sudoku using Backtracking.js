const sudoku = function (grid, i, j) {
  // console.log(ans,achieved);

  // when i reaches 9,0
  if (i == grid.length) {
    console.log(grid);
    return;
  }

  let newI, newJ;
  if (j == grid[0].length - 1) {
    newI = i + 1;
    newJ = 0;
  } else {
    newI = i;
    newJ = j + 1;
  }

  if (grid[i][j] == 0) {
    for (let k = 1; k <= 9; k++) {
      if (isValid(grid, i, j, k)) {
        grid[i][j] = k;
        sudoku(grid, newI, newJ);
        grid[i][j] = 0;
      }
    }
  } else {
    sudoku(grid, newI, newJ);
  }
};

var isValid = function (grid, r, c, k) {
  for (let j = 0; j < grid[0].length; j++) {
    if (grid[r][j] == k) return false;
  }

  for (let i = 0; i < grid.length; i++) {
    if (grid[i][c] == k) return false;
  }

  let topLefti = 3 * parseInt(r / 3),
    topLeftj = 3 * parseInt(c / 3);

  for (let i = topLefti; i < topLefti + 3; i++) {
    for (let j = topLeftj; j < topLeftj + 3; j++) {
      if (grid[i][j] == k) return false;
    }
  }

  return true;
};

let grid = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0],
];

console.log(sudoku(grid, 0, 0));
