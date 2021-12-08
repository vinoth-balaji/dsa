let costMatrix = [
  [2, 8, 4, 1, 6, 4, 2],
  [6, 0, 9, 5, 3, 8, 5],
  [1, 4, 3, 4, 0, 6, 5],
  [1, 0, 3, 7, 1, 2, 7],
  [1, 5, 3, 2, 3, 0, 9],
  [2, 2, 5, 1, 9, 8, 2],
];

let dp = [];
for (let i = 0; i < costMatrix.length; i++) {
  dp.push([]);
}

for (let i = costMatrix.length - 1; i >= 0; i--) {
  for (let j = costMatrix[0].length - 1; j >= 0; j--) {
    //last cell
    if (i == costMatrix.length - 1 && j == costMatrix[0].length - 1) {
      dp[i][j] = costMatrix[i][j];
    } else if (i == costMatrix.length - 1) {
      //bottom row
      dp[i][j] = costMatrix[i][j] + dp[i][j + 1];
    } else if (j == costMatrix[0].length - 1) {
      //right most col
      dp[i][j] = costMatrix[i][j] + dp[i + 1][j];
    } else {
      dp[i][j] = costMatrix[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1]);
    }
  }
}

console.log(dp);
