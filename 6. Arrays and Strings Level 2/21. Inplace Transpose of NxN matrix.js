a = [
  [11, 12, 13, 14],
  [21, 22, 23, 24],
  [31, 32, 33, 34],
  [41, 42, 43, 44],
];

for (let i = 0; i < a.length; i++) {
  for (let j = i; j >= 0; j--) {
    [a[j][i], a[i][j]] = [a[i][j], a[j][i]];
  }
}

console.log(a);
