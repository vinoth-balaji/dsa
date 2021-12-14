let a = [
  [1, 5, 7],
  [5, 8, 4],
  [3, 2, 9],
  [1, 2, 4],
];

let dp = [];

// 3 colours R,G,B
for (let i = 0; i < a.length; i++) {
  dp.push([]);
}

dp[0][0] = a[0][0];
dp[0][1] = a[0][1];
dp[0][2] = a[0][2];

for (let i = 1; i < a.length; i++) {
  dp[i][0] = a[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] = a[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
  dp[i][2] = a[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
}
console.log(
  Math.min(dp[a.length - 1][0], dp[a.length - 1][1], dp[a.length - 1][2])
);
