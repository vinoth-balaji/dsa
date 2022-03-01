const permutations = function (
  coins,
  completed,
  target,
  achieved,
  hashMap,
  ans
) {
  // console.log(ans,achieved);

  if (completed == coins.length) {
    return;
  }
  if (achieved == target) {
    console.log(ans);
    return;
  }

  for (let i = 0; i < coins.length; i++) {
    if (!hashMap.has(coins[i])) {
      hashMap.add(coins[i]);
      permutations(
        coins,
        completed + 1,
        target,
        achieved + coins[i],
        hashMap,
        ans + coins[i] + " - "
      );
      hashMap.delete(coins[i]);
    }
  }
};

let coins = [2, 3, 5, 6, 7],
  target = 12;

let hashMap = new Set();

// console.log(hashMap);
console.log(permutations(coins, 0, target, 0, hashMap, ""));
