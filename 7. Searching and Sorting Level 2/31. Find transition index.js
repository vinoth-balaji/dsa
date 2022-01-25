var a = [0, 0, 0, 1, 1];
let l = 0,
  r = a.length - 1;
let firstIndex = -1;
while (l <= r) {
  let m = parseInt((l + r) / 2);
  if (a[m] == 1) {
    r = m - 1;
    firstIndex = m;
  } else if (a[m] < 1) {
    l = m + 1;
  } else {
    r = m - 1; // this can be avoided as array has only 0 and 1
  }
}

console.log(firstIndex);
