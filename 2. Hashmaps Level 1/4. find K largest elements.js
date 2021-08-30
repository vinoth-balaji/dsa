let a = [2, 3, 1, 4, 6, 7, 5, 8, 9];
let k = 3;

MIN_HEAPIFY = function (a, i) {
  l = 2 * i + 1;
  r = 2 * i + 2;
  smallest = i;

  if (l < a.heap_size && a[l] < a[smallest]) smallest = l;
  if (r < a.heap_size && a[r] < a[smallest]) smallest = r;
  if (i != smallest) {
    [a[i], a[smallest]] = [a[smallest], a[i]];
    MIN_HEAPIFY(a, smallest);
  }
};

BUILD_HEAP = function (a) {
  a["heap_size"] = a.length;
  for (i = Math.floor(a.heap_size / 2); i >= 0; i--) {
    MIN_HEAPIFY(a, i);
  }
};

EXTRACT_MIN = function (a) {
  min = a[0];
  a[0] = a[a.heap_size - 1];
  a.heap_size = a.heap_size - 1;
  MIN_HEAPIFY(a, 0);
  return min;
};

INSERT_KEY = function (a, key) {
  a[a["heap_size"]] = key;
  a["heap_size"] += 1;
  let i = a["heap_size"] - 1;
  while (i >= 0 && a[Math.floor(i / 2)] > a[i]) {
    [a[Math.floor(i / 2)], a[i]] = [a[i], a[Math.floor(i / 2)]];
    i = Math.floor(i / 2);
  }
};

DELETE_KEY = function (a, i) {
  a[i] = a[a.heap_size - 1];
  a.heap_size = a.heap_size - 1;
  MIN_HEAPIFY(a, 0);
};

let b = [];
b["heap_size"] = 0;
for (let i = 0; i < k; i++) {
  INSERT_KEY(b, a[i]);
}

for (let i = k + 1; i < a.length; i++) {
  if (b[0] < a[i]) {
    EXTRACT_MIN(b);
    INSERT_KEY(b, a[i]);
  }
}

while (b["heap_size"] > 0) {
  console.log(EXTRACT_MIN(b));
}

// console.log(b);
