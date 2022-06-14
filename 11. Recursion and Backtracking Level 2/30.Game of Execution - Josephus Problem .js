var findTheWinner = function (n, k) {
  if (n == 1) return 1;

  let x = findTheWinner(n - 1, k);
  let y = ((x + k - 1) % n) + 1;
  return y;
};

let n = 5,
  k = 2;

console.log(findTheWinner(n, k));
