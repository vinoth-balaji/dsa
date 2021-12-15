let a = [1, 2, 3, 2, 5, 4];

let left = [],
  right = [],
  result = [];

left[0] = a[0];
right[a.length - 1] = a[a.length - 1];

for (let i = 1, j = a.length - 2; i < a.length; i++, j--) {
  left[i] = left[i - 1] * a[i];
  right[j] = right[j + 1] * a[j];
}
console.log(left);
result[0] = right[1];
result[a.length - 1] = left[a.length - 2];
for (let i = 1; i < a.length - 1; i++) {
  let lp = left[i - 1];
  let rp = right[i + 1];

  result[i] = lp * rp;
}
console.log(result);

// optimized approach

// calculating either left or right, and calculatingthe other whilt filling the result
let a = [1, 2, 3, 2, 5, 4];

let right = [],
  result = [];

right[a.length - 1] = a[a.length - 1];

for (j = a.length - 2; j >= 0; j--) {
  right[j] = right[j + 1] * a[j];
}

let leftProd = 1;
for (let i = 0; i < a.length; i++) {
  let rp = 1;
  if (i + 1 < a.length) {
    rp = right[i + 1];
  }
  result[i] = leftProd * rp;

  leftProd *= a[i];
}
console.log(result);
