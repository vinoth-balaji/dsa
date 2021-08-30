let a = [1, 1, 2, 2, 2, 3, 5];
let b = [1, 1, 1, 2, 2, 4, 5];

let hashMap = new Map();
for (let i in a) {
  if (hashMap.has(a[i])) {
    hashMap.set(a[i], hashMap.get(a[i]) + 1);
  } else {
    hashMap.set(a[i], 1);
  }
}

for (i in b) {
  if (hashMap.has(b[i]) && hashMap.get(b[i]) > 0) {
    console.log(b[i]);
    hashMap.set(b[i], hashMap.get(b[i]) - 1);
  }
}
