let n = 5;
let q = [
  [1, 3, 2],
  [2, 4, 3],
  [0, 2, 2],
];

let a = [];
for (let i = 0; i < n; i++) a[i] = 0;

for (let i = 0; i < q.length; i++) {
  let query = q[i];

  a[query[0]] += query[2];
  if (query[1] + 1 < n) {
    a[query[1] + 1] -= query[2];
  }
}

// finding prefix sum
let sum = 0;
for (let i = 0; i < a.length; i++) {
  sum += a[i];
  a[i] = sum;
}

console.log(a);
