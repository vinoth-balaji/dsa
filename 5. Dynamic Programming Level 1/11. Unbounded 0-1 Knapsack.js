let weight = [2, 5, 1, 3, 4];
let profit = [15, 14, 10, 45, 30];
let capacity = 7;

let dp = [];
for (let i = 0; i <= capacity; i++) {
  dp[i] = 0;
}
for (let i = 1; i <= capacity; i++) {
  let max = 0;
  for (let j = 0; j < weight.length; j++) {
    let w = weight[j];
    let prof = profit[j] + dp[i - w];
    if (w <= i && prof > max) {
      max = prof;
    }
  }

  dp[i] = max;
}

console.log(dp[capacity]);
