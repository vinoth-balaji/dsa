a = [
  [2, 6],
  [7, 3],
  [8, 2],
  [5, 8],
];

let transpose = [];
for (let i = 0; i < a[0].length; i++) {
  transpose.push([]);
}

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a[0].length; j++) {
    transpose[j][i] = a[i][j];
  }
}

console.log(transpose);
