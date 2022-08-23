let a = [
  [11, 12, 13, 14],
  [21, 22, 23, 24],
  [31, 32, 33, 34],
  [41, 42, 43, 44],
];

for (let i = 0; i < a.length; i++) {
  for (let k = 0, j = i; j < a.length; j++, k++) {
    console.log(a[k][j]);
  }
}
