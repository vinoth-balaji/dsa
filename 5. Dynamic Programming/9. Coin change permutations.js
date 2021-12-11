let coins = [2, 3, 5];
let target = 7;

let dp = [];
dp[0] = 1;
for (let i = 1; i <= target; i++) {
  dp[i] = 0;
}

for (let i = 1; i <= target; i++) {
  for (let j = 0; j < coins.length; j++) {
    let coin = coins[j];
    if (coin <= i) {
      dp[i] += dp[i - coin];
    }
  }
}

console.log(dp[target]);
