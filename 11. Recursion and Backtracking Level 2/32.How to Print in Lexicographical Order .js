var lexographic = function (n) {
  for (let i = 1; i < 10; i++) {
    dfs(i, n);
  }
};

var dfs = function (i, n) {
  if (i > n) return;

  console.log(i);

  for (let j = 0; j < 10; j++) dfs(10 * i + j, n);
};

let n = 100;

console.log(lexographic(n));
