let a = [
  [10, 12, 30, 40],
  [5, 9, 12, 18, 32],
  [11, 15, 17],
];
let k = 3;

MIN_HEAPIFY = function (a, i, key) {
  l = 2 * i + 1;
  r = 2 * i + 2;
  smallest = i;

  if (l < a.heap_size && a[l][key] < a[smallest][key]) smallest = l;
  if (r < a.heap_size && a[r][key] < a[smallest][key]) smallest = r;
  if (i != smallest) {
    [a[i], a[smallest]] = [a[smallest], a[i]];
    MIN_HEAPIFY(a, smallest);
  }
};

BUILD_HEAP = function (a, key) {
  a["heap_size"] = a.length;
  for (i = Math.floor(a.heap_size / 2); i >= 0; i--) {
    MIN_HEAPIFY(a, i, key);
  }
};

EXTRACT_MIN = function (a, key) {
  min = a[0];
  a[0] = a[a.heap_size - 1];
  a.heap_size = a.heap_size - 1;
  MIN_HEAPIFY(a, 0, key);
  return min;
};

INSERT_KEY = function (a, val, key) {
  a[a["heap_size"]] = val;
  a["heap_size"] += 1;
  let i = a["heap_size"] - 1;
  while (i >= 0 && a[Math.floor(i / 2)][key] > a[i][key]) {
    [a[Math.floor(i / 2)], a[i]] = [a[i], a[Math.floor(i / 2)]];
    i = Math.floor(i / 2);
  }
};

let pq = [];
pq["heap_size"] = 0;
let sl = [];

for (let i = 0; i < k; i++) {
  let obj = { li: i, di: 0, val: a[i][0] };
  INSERT_KEY(pq, obj, "val");
}

while (pq.heap_size > 0) {
  let min = EXTRACT_MIN(pq, "val");
  sl.push(min.val);
  min["di"]++;

  if (min["di"] < a[min["li"]].length) {
    min.val = a[min["li"]][min["di"]];
    INSERT_KEY(pq, min, "val");
  }
}

console.log(sl);
