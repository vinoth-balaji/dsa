let points = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
];
var findMinArrowShots = function (points) {
  if (points.length == 0) return 0;

  points = points.sort((a, b) => a[1] - b[1]);
  let arrows = 1;
  let currentRange = points[0];

  for (i = 1; i < points.length; i++) {
    if (points[i][0] > currentRange[1]) {
      arrows++;
      currentRange = points[i];
    } else {
      // the current arrow will burst the balloon
    }
  }

  return arrows;
};

console.log(findMinArrowShots(points));
