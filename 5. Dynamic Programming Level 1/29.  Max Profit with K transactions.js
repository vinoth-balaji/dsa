let stocks = [9, 6, 7, 6, 3, 8];
let k = 3;

let dp = [];
for (let i = 0; i <= k; i++) dp.push([0]);

for (let t = 0; t <= k; t++) {
  for (let d = 1; d < stocks.length; d++) {
    if (t == 0) dp[t][d] = 0;
    else {
      let max = dp[t][d - 1];

      for (let i = 0; i < d; i++) {
        let sv = dp[t - 1][i] + (stocks[d] - stocks[i]);
        if (sv > max) {
          max = sv;
        }
      }
      dp[t][d] = max;
    }
  }
}

console.log(dp, dp[k][stocks.length - 1]);

// optimized code
let stocks = [11, 6, 7, 19, 4, 1, 6, 18, 4];
let k = 1;

let dp = [];
for (let i = 0; i <= k; i++) dp.push([0]);

for (let t = 0; t <= k; t++) {
  let max = Number.NEGATIVE_INFINITY;

  for (let d = 1; d < stocks.length; d++) {
    if (t == 0) dp[t][d] = 0;
    else {
      let sv = dp[t - 1][d - 1] - stocks[d - 1];
      if (sv > max) max = sv;

      if (max + stocks[d] > dp[t][d - 1]) {
        dp[t][d] = max + stocks[d];
      } else {
        dp[t][d] = dp[t][d - 1];
      }
    }
  }
}

console.log(dp, dp[k][stocks.length - 1]);
