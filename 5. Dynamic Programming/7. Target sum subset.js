let a = [4, 2, 7, 1, 3];
let t = 10;
let dp = [];

for (let i = 0; i <= a.length; i++) dp.push([]);

for (let i = 0; i <= a.length; i++) {
  for (let j = 0; j <= t; j++) {
    if (i == 0 && j == 0) {
      // first cell
      dp[i][j] = true;
    } else if (i == 0) {
      // first row
      dp[i][j] = false;
    } else if (j == 0) {
      // first column
      dp[i][j] = true;
    } else {
      let val = a[i - 1];
      if (j < val) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j - val] || dp[i - 1][j];
      }
    }
  }
}

console.log(dp[a.length][t]);
