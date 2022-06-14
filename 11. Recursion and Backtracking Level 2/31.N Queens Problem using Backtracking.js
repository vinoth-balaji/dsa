var solveNQueens = function (n) {
  let cols = [];
  let lrDiagonals = [];
  let rlDiagonals = [];
  let ans = [];
  for (let i = 0; i < n; i++) {
    ans.push([]);
    for (let j = 0; j < n; j++) {
      ans[i][j] = ".";
    }
  }

  let all = [];
  solve(n, 0, cols, lrDiagonals, rlDiagonals, ans, all);

  if (all.length == 0) return [];

  for (let i = 0; i < all.length; i++) {
    for (let j = 0; j < all[i].length; j++) {
      all[i][j] = all[i][j].join("");
    }
  }

  return all;
};

var solve = function (n, row, cols, lrDiagonals, rlDiagonals, ans, all) {
  if (row == n) {
    // console.log(ans);
    all.push(JSON.parse(JSON.stringify(ans)));
    return;
  }

  for (let j = 0; j < n; j++) {
    if (
      cols[j] == undefined &&
      lrDiagonals[row + j] == undefined &&
      rlDiagonals[row - j + n - 1] == undefined
    ) {
      cols[j] = true;
      lrDiagonals[row + j] = true;
      rlDiagonals[row - j + n - 1] = true;

      ans[row][j] = "Q";
      solve(n, row + 1, cols, lrDiagonals, rlDiagonals, ans, all);
      ans[row][j] = ".";

      cols[j] = undefined;
      lrDiagonals[row + j] = undefined;
      rlDiagonals[row - j + n - 1] = undefined;
    }
  }
};

let n = 4;

console.log(solveNQueens(n));
