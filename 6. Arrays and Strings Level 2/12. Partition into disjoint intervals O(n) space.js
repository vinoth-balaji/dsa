let a = [30, 10, 20, 40, 60, 50, 75, 70];

let rightMin = [];
let chunks = 0;

rightMin[a.length - 1] = a[a.length - 1];
for (let i = a.length - 2; i >= 0; i--) {
  rightMin[i] = Math.min(a[i], rightMin[i + 1]);
}

let max = a[0];
let i = 0;
for (i = 0; i < a.length; i++) {
  if (a[i] > max) max = a[i];

  //   < as we need to include <= right elements
  if (max < rightMin[i + 1] || i + 1 == a.length - 1) {
    break;
  }
}

console.log(i + 1, " Elements");
