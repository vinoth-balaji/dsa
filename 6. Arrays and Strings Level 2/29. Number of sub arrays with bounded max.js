let a = [2, 1, 4, 3];
let l = 2,
  u = 3,
  ans = 0,
  prev = 0;

let s = 0;
for (let i = 0; i < a.length; i++) {
  // case 1
  if (a[i] >= l && a[i] <= u) {
    prev = i - s + 1;
    ans += prev;
  }
  // case 2
  else if (a[i] < l) {
    ans += prev;
  }
  // case 3
  else {
    s = i + 1;
    prev = 0;
  }
}

console.log(ans);
