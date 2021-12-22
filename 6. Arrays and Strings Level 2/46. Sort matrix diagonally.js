let matrix = [
  [11, 25, 66, 1, 69, 7],
  [23, 55, 17, 45, 15, 52],
  [75, 31, 36, 44, 58, 8],
  [22, 27, 33, 25, 68, 4],
  [84, 28, 14, 11, 5, 50],
];

let rows = matrix.length,
  cols = matrix[0].length;

// bottom half diagonals
for (let i = 0; i < rows; i++) {
  countSort(matrix, i, 0);
}

// top half diagonals
for (let j = 0; j < cols; j++) {
  countSort(matrix, 0, j);
}

function countSort(matrix, i, j) {
  let rows = matrix.length,
    cols = matrix[0].length;
  let count = [];
  let s = i,
    e = j;

  for (let k = 0; k <= 100; k++) {
    count[k] = 0;
  }

  while (s < rows && e < cols) {
    count[matrix[s][e]]++;
    s++;
    e++;
  }
  for (let k = 0; k < count.length; k++) {
    while (count[k] > 0) {
      matrix[i][j] = k;
      count[k]--;
      i++;
      j++;
    }
  }
}

console.log(matrix);
