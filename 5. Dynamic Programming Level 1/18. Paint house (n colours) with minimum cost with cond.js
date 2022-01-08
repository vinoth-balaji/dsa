let a = [
  [1, 5, 7, 2, 3, 4],
  [5, 8, 4, 3, 6, 1],
  [3, 2, 9, 7, 2, 3],
  [1, 2, 4, 9, 1, 7],
];

let dp = [];
for (let i = 0; i < a.length; i++) {
  dp.push([]);
}

let min = Number.POSITIVE_INFINITY;
let min_2 = Number.POSITIVE_INFINITY;
for (let i = 0; i < a[0].length; i++) {
  dp[0][i] = a[0][i];

  if (a[0][i] < min) {
    min_2 = min;
    min = a[0][i];
  } else if (a[0][i] < min_2) {
    min_2 = a[0][i];
  }
}

for (let i = 1; i < a.length; i++) {
  let n_min = Number.POSITIVE_INFINITY;
  let n_min_2 = Number.POSITIVE_INFINITY;

  for (let j = 0; j < a[0].length; j++) {
    if (min == dp[i - 1][j]) dp[i][j] = a[i][j] + min_2;
    else dp[i][j] = a[i][j] + min;

    if (dp[i][j] < n_min) {
      n_min_2 = n_min;
      n_min = dp[i][j];
    } else if (dp[i][j] < n_min_2) {
      n_min_2 = dp[i][j];
    }
  }
  min = n_min;
  min_2 = n_min_2;
}

console.log(min);
