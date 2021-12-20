let a = [10, 10, 5, 15, 6, 4, 20];

a = a.sort(function (a, b) {
  return a - b;
});
let t = 40;
let quadruples = [];

if (a.length >= 4) {
  let i = 0;
  for (i; i <= a.length - 4; i++) {
    if (i != 0 && a[i] == a[i - 1]) continue;

    let val = a[i];
    let trips = triplets(a, i + 1, t - val);
    for (pair of trips) {
      pair.push(val);
      quadruples.push(pair);
    }
  }

  function triplets(a, li, t) {
    let trips = [];

    let i = li;
    for (i; i <= a.length - 3; i++) {
      if (i != li && a[i] == a[i - 1]) continue;

      let val = a[i];
      let pair_2 = twoPair(a, i + 1, a.length - 1, t - val);
      for (pair of pair_2) {
        pair.push(val);
        trips.push(pair);
      }
    }
    return trips;
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
console.log(quadruples);
