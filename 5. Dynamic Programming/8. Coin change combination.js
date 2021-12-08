let coins = [2, 3, 5];
let target = 7;

let dp = [];
dp[0] = 1;
for (let i = 1; i <= target; i++) {
  dp[i] = 0;
}

for (let i = 0; i < coins.length; i++) {
  let coin = coins[i];
  for (let j = coin; j <= target; j++) {
    dp[j] += dp[j - coin];
  }
}

console.log(dp[target]);
