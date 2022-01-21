var searchMatrix = function (a, target) {
  let i = 0,
    j = a[0].length - 1;

  while (i < a.length && j >= 0) {
    if (target == a[i][j]) return true;
    else if (target > a[i][j]) i++;
    else j--;
  }

  return false;
};

let matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  target = 25;
console.log(searchMatrix(matrix, target));
