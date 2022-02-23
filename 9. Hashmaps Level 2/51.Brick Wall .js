var leastBricks = function (wall) {
  let splits = {};
  let ans = 0;

  for (let row of wall) {
    let ps = 0;
    for (let j = 0; j < row.length - 1; j++) {
      ps += row[j];
      if (splits.hasOwnProperty(ps)) {
        splits[ps] += 1;
      } else {
        splits[ps] = 1;
      }
    }
  }
  // console.log(splits);
  Object.entries(splits).forEach(([len, count]) => {
    ans = Math.max(ans, count);
  });

  return wall.length - ans;
};

let wall = [
  [1, 2, 2, 1],
  [3, 1, 2],
  [1, 3, 2],
  [2, 4],
  [3, 1, 2],
  [1, 3, 1, 1],
];
console.log(leastBricks(wall));
