var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

floor = Number.POSITIVE_INFINITY;
ceil = Number.NEGATIVE_INFINITY;

t = 35;

let l = 0,
  r = a.length - 1;

while (l <= r) {
  let m = parseInt((l + r) / 2);
  if (a[m] == t) {
    floor = a[m];
    ceil = a[m];
    return;
  } else if (a[m] > t) {
    ceil = a[m];
    r = m - 1;
  } else {
    floor = a[m];
    l = m + 1;
  }
}

console.log(floor, ceil);
