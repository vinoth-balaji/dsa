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
  if (hashMap.has(b[i])) {
    console.log(b[i]);
    hashMap.delete(b[i]);
  }
}
