let m = 3,
  n = 8;

let dp = [];

for (let i = 1; i <= n; i++) {
  if (i < m) {
    dp[i] = 1;
  } else if (m == i) {
    dp[i] = 2;
  } else {
    dp[i] = dp[i - 1] + dp[i - m];
  }
}
console.log(dp[n]);
