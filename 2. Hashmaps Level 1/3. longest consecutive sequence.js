let a = [10, 5, 9, 1, 11, 8, 6, 15, 3, 12, 2];
let hashMap = new Map();
let sp = 0;
let maxL = 0;
for (let i in a) hashMap.set(a[i], true);

for (let i in a) {
  if (hashMap.has(a[i] - 1)) hashMap.set(a[i], false);
}

for (let i in a) {
  if (hashMap.get(a[i])) {
    t1 = 1;
    while (hashMap.has(a[i] + t1)) {
      t1++;
    }
    if (t1 > maxL) {
      sp = a[i];
      maxL = t1;
    }
  }
}

console.log(sp, maxL);
