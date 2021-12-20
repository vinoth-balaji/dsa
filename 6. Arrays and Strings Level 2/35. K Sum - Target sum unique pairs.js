let a = [1, 0, -1, 0, -2, 2];

a = a.sort(function (a, b) {
  return a - b;
});
let t = 0,
  k = 4;

kSumHelper = function (a, si, k, target) {
  if (k == 2) return twoPair(a, si, a.length - 1, target);

  if (a.length - si < k) return [];

  let kPairs = [];
  for (let i = si; i <= a.length - k; i++) {
    if (i != si && a[i] == a[i - 1]) continue;

    let val = a[i];
    let ksums = kSumHelper(a, i + 1, k - 1, target - val);
    for (pair of ksums) {
      pair.push(val);
      kPairs.push(pair);
    }
  }
  return kPairs;
};

function twoPair(a, si, ei, t) {
  if (a.length - si < 2) return [];

  let i = si,
    j = ei;
  let pairs = [];
  while (i < j) {
    let target = a[i] + a[j];

    if (target == t) {
      if (i == si || (i != si && a[i] != a[i - 1])) pairs.push([a[i], a[j]]);
      i++;
      j--;
    } else if (target < t) {
      i++;
    } else {
      j--;
    }
  }

  return pairs;
}

console.log(kSumHelper(a, 0, k, t));
