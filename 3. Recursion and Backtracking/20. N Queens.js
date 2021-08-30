let n = 4;
let a = [];
for (let i = 0; i < n; i++) {
  a.push(new Array(n).fill(0));
}

function NQueens(chess, n, row, path) {
  if (row == n) {
    console.log(path);
    return;
  }

  for (let col = 0; col < n; col++) {
    if (checkValidity(chess, row, col)) {
      chess[row][col] = 1;
      NQueens(chess, n, row + 1, path + row + "-" + col + ",");
      chess[row][col] = 0;
    }
  }
}

function checkValidity(chess, row, col) {
  //no need to consider current row

  //top
  for (let i = row - 1, j = col; i >= 0; i--) {
    if (chess[i][j]) return false;
  }

  //left diagonal
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (chess[i][j]) return false;
  }

  //right diagonal
  for (let i = row - 1, j = col + 1; i >= 0 && j < chess.length; i--, j++) {
    if (chess[i][j]) return false;
  }

  return true;
}

NQueens(a, n, 0, "");
