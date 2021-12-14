let goldmatrix = [
  [0, 1, 4, 2, 8, 2],
  [4, 3, 6, 5, 0, 4],
  [1, 2, 4, 1, 4, 6],
  [2, 0, 7, 3, 2, 2],
  [3, 1, 5, 9, 2, 4],
  [2, 7, 0, 8, 5, 1],
];

let dp = [];
for (let i = 0; i < goldmatrix.length; i++) {
  dp.push([]);
}

for (let j = goldmatrix[0].length - 1; j >= 0; j--) {
  for (let i = goldmatrix.length - 1; i >= 0; i--) {
    if (j == goldmatrix[0].length - 1) {
      //last column has same values
      dp[i][j] = goldmatrix[i][j];
    } else if (i == 0) {
      // first row
      dp[i][j] = goldmatrix[i][j] + Math.max(dp[i][j + 1], dp[i + 1][j + 1]);
    } else if (i == goldmatrix.length - 1) {
      // last row
      dp[i][j] = goldmatrix[i][j] + Math.max(dp[i][j + 1], dp[i - 1][j + 1]);
    } else {
      dp[i][j] =
        goldmatrix[i][j] +
        Math.max(dp[i][j + 1], dp[i - 1][j + 1], dp[i + 1][j + 1]);
    }
  }
}

let max = dp[0][0];
for (let i = 1; i < dp.length; i++) {
  if (dp[i][0] > max) max = dp[i][0];
}
console.log(max);
