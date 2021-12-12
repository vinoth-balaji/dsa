let n = 4;

let dp = [];
dp[0] = 1;
dp[1] = 2;

for (let i = 2; i < n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}
console.log(dp[n - 1]);
