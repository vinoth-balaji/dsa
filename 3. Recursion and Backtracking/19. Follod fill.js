let m = [
  [0, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 0, 1, 1],
  [1, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0],
];

let visited = [
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
];

function floodFill(a, i, j, re, ce, visited, path) {
  if (i < 0 || j < 0 || i > re || j > ce || visited[i][j] || a[i][j] == 1)
    return;

  if (i == re && j == ce) {
    console.log(path);
    return;
  }

  visited[i][j] = true;
  floodFill(a, i - 1, j, re, ce, visited, path + "T");
  floodFill(a, i, j - 1, re, ce, visited, path + "L");
  floodFill(a, i + 1, j, re, ce, visited, path + "D");
  floodFill(a, i, j + 1, re, ce, visited, path + "R");
  visited[i][j] = false;
}

floodFill(m, 0, 0, m.length - 1, m[0].length - 1, visited, "");
