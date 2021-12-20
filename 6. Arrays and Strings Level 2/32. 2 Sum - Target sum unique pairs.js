let a = [2, 2, 4, 3, 1, 6, 6, 7, 5, 9, 1, 8, 9];

a = a.sort(function (a, b) {
  return a - b;
});
let t = 10;
let pairs = [];

let i = 0,
  j = a.length - 1;
while (i < j) {
  let target = a[i] + a[j];

  if (target == t) {
    if (i == 0 || (i != 0 && a[i] != a[i - 1])) {
      pairs.push([a[i], a[j]]);
    }

    i++;
    j--;
  } else if (target < t) {
    i++;
  } else {
    j--;
  }
}

console.log(pairs);
