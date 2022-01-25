let a = [8, 3, 1, 2];
let s0 = 0,
  sum = 0,
  n = a.length;
let max = 0;
for (let i = 0; i < a.length; i++) {
  s0 += i * a[i];
  sum += a[i];
}
max = s0;
let si = s0;

//<n-1 as to avoid loop
for (let i = 1; i < n - 1; i++) {
  sip1 = si + sum - n * a[n - i - 1];
  si = sip1;
  max = Math.max(max, si);
}
console.log(max);
