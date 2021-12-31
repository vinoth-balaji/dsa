let a = [2, 1, 3, 4];
a = a.sort((a, b) => a - b);

let pow = [];

// 2^0=1, calculation all powers beforehand
pow[0] = 1;
for (let i = 1; i < a.length; i++) {
  pow[i] = 2 * pow[i - 1];
}
ans = 0;
for (let i = 0; i < a.length; i++) {
  // contribution of each element to width
  ans += a[i] * (pow[i] - pow[a.length - 1 - i]);
}

console.log(ans);
