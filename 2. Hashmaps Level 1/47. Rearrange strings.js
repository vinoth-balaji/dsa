// Max Heap functions
MAX_HEAPIFY = function (a, i, keyIndex) {
  l = 2 * i + 1;
  r = 2 * i + 2;
  largest = i;

  if (l < a.length && a[l][keyIndex] > a[largest][keyIndex]) largest = l;
  if (r < a.length && a[r][keyIndex] > a[largest][keyIndex]) largest = r;
  if (i != largest) {
    [a[i], a[largest]] = [a[largest], a[i]];
    MAX_HEAPIFY(a, largest, keyIndex);
  }
};

EXTRACT_MAX = function (a, keyIndex) {
  max = a[0];
  a[0] = a[a.length - 1];
  a.pop();
  MAX_HEAPIFY(a, 0, keyIndex);
  return max;
};

INSERT_KEY = function (a, val, keyIndex) {
  a.push(val);
  let i = a.length - 1;
  while (i >= 0 && a[Math.floor(i / 2)][keyIndex] < a[i][keyIndex]) {
    [a[Math.floor(i / 2)], a[i]] = [a[i], a[Math.floor(i / 2)]];
    i = Math.floor(i / 2);
  }
};
// ........................................................

let s = "nlmxhnpifuaxinxpxlcttjnlggmkjioewbecnofqpvcikiazmn";
let hashMap = new Map();
let pq = [];
for (let i = 0; i < s.length; i++) {
  if (hashMap.has(s[i])) {
    hashMap.set(s[i], hashMap.get(s[i]) + 1);
  } else {
    hashMap.set(s[i], 1);
  }
}

for (const [key, value] of hashMap.entries()) {
  INSERT_KEY(pq, [key, value], 1);
}
let block,
  ans = "";

block = EXTRACT_MAX(pq, 1);
ans = ans + block[0];
block[1]--;

while (pq.length > 0) {
  let temp = EXTRACT_MAX(pq, 1);
  ans = ans + temp[0];
  temp[1]--;

  if (block[1] > 0) {
    INSERT_KEY(pq, block, 1);
  }
  block = temp;
}

if (block[1] > 0) ans = "";

console.log(ans);
