var a = [7, 4, 8, 2, 9, 6];

let count = 1;
let lmax = a[0];
for (let i = 1; i < a.length; i++) {
  if (a[i] > lmax) count++;
  lmax = Math.max(lmax, a[i]);
}

console.log(count);
