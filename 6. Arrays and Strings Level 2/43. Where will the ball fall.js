let grid = [
  [1, 1, 1, -1, -1],
  [1, 1, 1, -1, -1],
  [-1, -1, -1, 1, 1],
  [1, 1, 1, 1, -1],
  [-1, -1, -1, -1, -1],
];

var findBall = function (grid) {
  let ans = [];

  for (let k = 0; k < grid[0].length; k++) {
    let j = k;
    let i = 0;

    let flag = false;
    for (i; i < grid.length; ) {
      if (j < 0 || j > grid[0].length) {
        flag = true;
        break;
      }

      if (grid[i][j] == 1) {
        if (grid[i][j] != grid[i][j + 1]) {
          flag = true;
          break;
        }

        i++;
        j++;
      } else if (grid[i][j] == -1) {
        if (grid[i][j] != grid[i][j - 1]) {
          flag = true;
          break;
        }

        i++;
        j--;
      }
    }

    // console.log(i, j, flag);

    if (!flag) ans.push(j);
    else ans.push(-1);
  }

  return ans;
};

console.log(findBall(grid));
