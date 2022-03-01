const combinations = function (coins, completed, target, achieved, ans) {
  //   console.log(ans);

  if (completed == coins.length) {
    if (achieved == target) console.log(ans);
    return;
  }

  let coin = coins[completed];

  let val = achieved + coin;
  let comb = coin;
  while (val <= target) {
    combinations(coins, completed + 1, target, val, ans + comb + " - ");
    val += coin;
    comb += " - " + coin;
  }
  combinations(coins, completed + 1, target, achieved, ans);
};

let coins = [2, 3, 5, 6, 7],
  target = 12;

console.log(combinations(coins, 0, target, 0, ""));
