var MinHeap = require("./../0. DS Implementation/1. MinHeap.js");

let a = [2, 3, 1, 4, 6, 7, 5, 8, 9];
let k = 3;

let b = new MinHeap();
for (let i = 0; i < k; i++) {
  b.insert(a[i]);
}

for (let i = k + 1; i < a.length; i++) {
  if (b.top() < a[i]) {
    b.extract_min();
    b.insert(a[i]);
  }
}

while (b.size() > 0) {
  console.log(b.extract_min());
}
