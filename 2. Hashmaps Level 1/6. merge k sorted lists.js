var MinHeap = require("./../0. DS Implementation/1. MinHeap.js");

let a = [
  [10, 12, 30, 40],
  [5, 9, 12, 18, 32],
  [11, 15, 17],
];
let k = 3;

let pq = new MinHeap("val");
let sl = [];

for (let i = 0; i < k; i++) {
  let obj = { li: i, di: 0, val: a[i][0] };
  pq.insert(obj);
}

while (pq.size() > 0) {
  let min = pq.extract_min();
  sl.push(min.val);
  min["di"]++;

  if (min["di"] < a[min["li"]].length) {
    min.val = a[min["li"]][min["di"]];
    pq.insert(min);
  }
}

console.log(sl);
