var noncoincidingPairs = function (x, y) {
  let xMap = {},
    yMap = {},
    xyMap = {};

  let ans = 0;

  for (let i = 0; i < x.length; i++) {
    if (xMap.hasOwnProperty(x[i]) && !xyMap.hasOwnProperty(x[i] + "#" + y[i])) {
      ans += xMap[x[i]];
    }
    if (yMap.hasOwnProperty(y[i]) && !xyMap.hasOwnProperty(x[i] + "#" + y[i])) {
      ans += yMap[y[i]];
    }

    if (xMap.hasOwnProperty(x[i])) {
      xMap[x[i]] += 1;
    } else xMap[x[i]] = 1;

    if (yMap.hasOwnProperty(y[i])) {
      yMap[y[i]] += 1;
    } else yMap[y[i]] = 1;

    if (xyMap.hasOwnProperty(x[i] + "#" + y[i])) {
    } else {
      xyMap[x[i] + "#" + y[i]] += 1;
    }
  }

  return ans;
};

let x = [1, 2, 1],
  y = [2, 3, 3];
console.log(noncoincidingPairs(x, y));
