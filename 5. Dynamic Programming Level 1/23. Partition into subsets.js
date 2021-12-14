let n = 5;
let k = 4;
let dp = [];
for (let i = 0; i <= k; i++) {
  dp.push([]);
}

for (let i = 0; i <= k; i++) {
  for (let j = 0; j <= n; j++) {
    if (i == 0 || j == 0 || j < i) {
      dp[i][j] = 0;
    } else if (i == j || i == 1) {
      dp[i][j] = 1;
    } else {
      dp[i][j] = i * dp[i][j - 1] + dp[i - 1][j - 1];
    }
  }
}

console.log(dp[k][n]);
