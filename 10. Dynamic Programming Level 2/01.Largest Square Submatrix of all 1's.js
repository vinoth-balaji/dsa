var maximalSquare = function (matrix) {
  ans = 0;
  let dp = [];
  for (let i = 0; i < matrix.length; i++) dp.push([]);

  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = matrix[0].length - 1; j >= 0; j--) {
      if (i == matrix.length - 1 || j == matrix[0].length - 1) {
        dp[i][j] = +matrix[i][j];
      } else {
        if (matrix[i][j] == "1")
          dp[i][j] = Math.min(dp[i][j + 1], dp[i + 1][j], dp[i + 1][j + 1]) + 1;
        else dp[i][j] = +matrix[i][j];
      }

      ans = Math.max(ans, dp[i][j]);
    }
  }

  return ans * ans;
};

let matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];
console.log(maximalSquare(matrix));
