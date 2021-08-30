let a = [
  [10, 0, 0],
  [0, 1, 20],
];

let b = [
  [10, 1, 1, 1],
  [20, 1, 1, 1],
  [3, 2, 0, 30],
];

// m* n  X n*p  -> m*p matrix

let c = [];
if (a[0].length == b.length) {
  for (let i = 0; i < a.length; i++) {
    c[i] = [];

    for (let j = 0; j < b[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < b.length; k++) {
        sum += a[i][k] * b[k][j];
      }
      c[i][j] = sum;
    }
  }
  console.log(c);
} else {
  console.log("Invalid Input");
}
