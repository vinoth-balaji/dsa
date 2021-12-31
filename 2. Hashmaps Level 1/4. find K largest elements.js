var MinHeap = require("./../0. DS Implementation/1. MinHeap.js");

let a = [2, 3, 1, 4, 6, 7, 5, 8, 9];
let k = 3;

let hashMap = new MinHeap();
for (let i = 0; i < a.length; i++) {
  if (hashMap.size() < k) {
    hashMap.insert(a[i]);
  } else {
    if (hashMap.top() < a[i]) {
      hashMap.extract_min();
      hashMap.insert(a[i]);
    }
  }
}

while (hashMap.size() > 0) {
  console.log(hashMap.extract_min());
}
