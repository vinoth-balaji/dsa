let a = [
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
];

let x = [],
  y = [],
  distance = 0;

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a[0].length; j++) {
    if (a[i][j] == 1) x.push(i);
  }
}

for (let j = 0; j < a[0].length; j++) {
  for (let i = 0; i < a.length; i++) {
    if (a[i][j] == 1) y.push(j);
  }
}

let xMedian = x[parseInt(x.length / 2)];
let yMedian = y[parseInt(y.length / 2)];

for (let i = 0; i < x.length; i++) {
  distance += Math.abs(xMedian - x[i]);
  distance += Math.abs(yMedian - y[i]);
}

console.log(distance);
