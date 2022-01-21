var searchMatrix = function (a, target) {
  let i = 0,
    j = a[0].length - 1,
    l = 0,
    r = a.length - 1;

  while (l <= r) {
    let m = parseInt((l + r) / 2);
    if (target >= a[m][0] && target <= a[m][j]) {
      i = m;
      break;
    } else if (target < a[m][0]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  if (i == a.length) return false;

  l = 0;
  r = a[0].length - 1;
  while (l <= r) {
    let m = parseInt((l + r) / 2);
    if (a[i][m] == target) return true;
    else if (a[i][m] > target) {
      r = m - 1;
    } else l = m + 1;
  }

  return false;
};

let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 3;

console.log(searchMatrix(matrix, target));
