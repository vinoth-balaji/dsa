let a = [50, 30, 10, 60, 20, 40, 90, 80, 10, 20, 40];

a = a.sort(function (a, b) {
  return a - b;
});
let t = 100;
let triplets = [];

if (a.length >= 3) {
  let i = 0;
  for (let i = 0; i <= a.length - 3; i++) {
    if (i != 0 && a[i] == a[i - 1]) continue;

    let val = a[i];
    let pair_2 = twoPair(a, i + 1, a.length - 1, t - val);
    for (pair of pair_2) {
      pair.push(val);
      triplets.push(pair);
    }
  }

  function twoPair(a, li, ri, t) {
    let i = li,
      j = ri;
    let pairs = [];
    while (i < j) {
      let target = a[i] + a[j];

      if (target == t) {
        if (i == li || (i != li && a[i] != a[i - 1])) pairs.push([a[i], a[j]]);
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
}
console.log(triplets);
