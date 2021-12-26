var MaxHeap = require("./../0. DS Implementation/2. MaxHeap.js");

let s = "nlmxhnpifuaxinxpxlcttjnlggmkjioewbecnofqpvcikiazmn";
let hashMap = new Map();
let pq = new MaxHeap(1);

for (let i = 0; i < s.length; i++) {
  if (hashMap.has(s[i])) {
    hashMap.set(s[i], hashMap.get(s[i]) + 1);
  } else {
    hashMap.set(s[i], 1);
  }
}

for (const [key, value] of hashMap.entries()) {
  pq.insert([key, value]);
}
let block,
  ans = "";

block = pq.extract_max();
ans = ans + block[0];
block[1]--;

while (pq.size() > 0) {
  let temp = pq.extract_max();
  ans = ans + temp[0];
  temp[1]--;

  if (block[1] > 0) {
    pq.insert(block);
  }
  block = temp;
}

if (block[1] > 0) ans = "";

console.log(ans);
