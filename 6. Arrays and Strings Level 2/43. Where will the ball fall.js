let a = [
  [1, 1, 1, -1, -1],
  [1, 1, 1, -1, -1],
  [-1, -1, -1, 1, 1],
  [1, 1, 1, 1, -1],
  [-1, -1, -1, -1, -1],
];

let ans = [];

let rows = a.length,
  cols = a[0].length;

for (let j = 0; j < cols; j++) {
  let cur = j;
  let next = 0;
  let flag = false;

  for (let i = 0; i < rows; i++) {
    // etting next position left (-1) or right (1) => j++ or j--
    next = cur + a[i][cur];

    if (next < 0 || next >= cols || a[i][next] != a[i][cur]) {
      ans.push(-1);
      flag = true;
      break;
    }
    cur = next;
  }

  if (!flag) ans.push(cur);
}

console.log(ans);
