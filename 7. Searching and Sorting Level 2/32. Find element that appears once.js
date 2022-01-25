let a = [1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 6];

let l = 0,
  r = a.length - 1;

let distinct = -1;

if (a[0] != a[1]) console.log(a[0]);
if (a[r] != a[r - 1]) console.log(a[r]);
else
  while (l <= r) {
    let m = parseInt((l + r) / 2);
    if (a[m - 1] != a[m] && a[m + 1] != a[m]) {
      distinct = a[m];
      break;
    } else if (a[m - 1] == a[m]) {
      let c = m - l + 1;
      if (c % 2 == 0) {
        l = m + 1;
      } else {
        r = m - 2; // to remove the pair
      }
    } else {
      let c = r - m + 1;
      if (c % 2 == 0) {
        r = m - 1;
      } else {
        l = m + 2; // to remove the pair
      }
    }
  }

console.log(distinct);
