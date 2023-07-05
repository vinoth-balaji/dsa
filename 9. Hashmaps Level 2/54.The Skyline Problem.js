var getSkyline = function (buildings) {
  let splits = [];
  for (let b of buildings) {
    splits.push([b[0], -b[2]]);
    splits.push([b[1], b[2]]);
  }

  splits.sort((a, b) => {
    if (a[0] != b[0]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  // console.log(splits);

  let ans = [];
  let active = 0;
  let activeHeights = [0];

  for (let b of splits) {
    if (b[1] < 0) {
      activeHeights.push(Math.abs(b[1]));
    } else {
      let findIndex = activeHeights.findIndex((x) => x == Math.abs(b[1]));
      // console.log(activeHeights[findIndex]);
      activeHeights.splice(findIndex, 1);
    }

    let max = Math.max(...activeHeights);
    // console.log(max, active, activeHeights);
    if (max != active) {
      ans.push([b[0], max]);
      active = max;
    }

    // console.log(ans);
  }

  return ans;
};
//[start end height]
let buildings = [
  [0, 2, 3],
  [2, 5, 3],
];
console.log(getSkyline(buildings));
//[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
