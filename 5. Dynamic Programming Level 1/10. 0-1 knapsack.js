let weight = [1, 2, 4];
let profit = [10, 12, 28];
let capacity = 6;

let dp = [];
for (let i = 0; i <= weight.length; i++) {
  dp.push([]);
}

for (let i = 0; i <= weight.length; i++) {
  for (let j = 0; j <= capacity; j++) {
    if (i == 0 || j == 0) dp[i][j] = 0;
    else {
      let cap = weight[i - 1];
      if (j < cap) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], profit[i - 1] + dp[i - 1][j - cap]);
      }
    }
  }
}

console.log(dp[weight.length][capacity]);
