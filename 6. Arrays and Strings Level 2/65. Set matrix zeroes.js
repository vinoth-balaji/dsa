let matrix = [[1], [0]];

var setZeroes = function (matrix) {
  let m = matrix.length,
    n = matrix[0].length;
  let row0 = false,
    col0 = false;

  // check if first col has 0
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] == 0) {
      col0 = true;
      break;
    }
  }
  // check if first row has 0
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] == 0) {
      row0 = true;
      break;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    if (matrix[i][0] == 0) {
      for (let j = 1; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
  }
  for (let j = 1; j < n; j++) {
    if (matrix[0][j] == 0) {
      for (let i = 1; i < m; i++) {
        matrix[i][j] = 0;
      }
    }
  }

  if (row0) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }
  if (col0) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
};

console.log(setZeroes(matrix));
