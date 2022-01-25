var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  let ans = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) ans.push([i, j]);
  }

  ans.sort((a, b) => {
    let dist_a = Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter);
    let dist_b = Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter);

    return dist_a - dist_b;
  });

  return ans;
};

let rows = 2,
  cols = 2,
  rCenter = 0,
  cCenter = 1;

console.log(allCellsDistOrder(rows, cols, rCenter, cCenter));
