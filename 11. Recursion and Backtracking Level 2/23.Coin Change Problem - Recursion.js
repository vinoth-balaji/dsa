const combinations = function (coins, completed, target, achieved, ans) {
  // console.log(hashMap, ans);

  if (completed == coins.length) {
    if (achieved == target) console.log(ans);
    return;
  }

  let coin = coins[completed];
  combinations(
    coins,
    completed + 1,
    target,
    achieved + coin,
    ans + coin + " - "
  );
  combinations(coins, completed + 1, target, achieved, ans);
};

let coins = [2, 3, 5, 6, 7],
  target = 12;

// console.log(hashMap);
console.log(combinations(coins, 0, target, 0, ""));
