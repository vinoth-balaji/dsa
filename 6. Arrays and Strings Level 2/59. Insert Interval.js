let intervals = [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ],
  newInterval = [4, 8];

var insert = function (intervals, newInterval) {
  if (intervals.length == 0) return [newInterval];

  let newIIndex = 0;
  let ans = [];

  for (newIIndex = 0; newIIndex < intervals.length; newIIndex++) {
    if (intervals[newIIndex][0] < newInterval[0]) {
      ans.push(intervals[newIIndex]);
    } else break;
  }

  if (ans.length == 0 || newInterval[0] > ans[ans.length - 1][1]) {
    ans.push(newInterval);
  } else {
    let lastInterval = ans[ans.length - 1];
    lastInterval[1] = Math.max(newInterval[1], lastInterval[1]);
  }

  for (newIIndex; newIIndex < intervals.length; newIIndex++) {
    let curr = intervals[newIIndex];
    let prev = ans[ans.length - 1];

    // case 1 - No Overlap
    if (curr[0] > prev[1]) {
      ans.push(curr);
    }
    //case 2 partial overlap
    else if (curr[0] <= prev[1] && curr[1] >= prev[1]) {
      prev[1] = curr[1];
    } else {
      //ignore complete ovelap
    }
  }

  return ans;
};

console.log(insert(intervals, newInterval));
