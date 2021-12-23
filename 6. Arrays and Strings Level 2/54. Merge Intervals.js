let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

var merge = function (intervals) {
  if (intervals.length == 0) return [];

  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let ans = [];

  for (let i = 0; i < intervals.length; i++) {
    let curr = intervals[i];

    if (i == 0) {
      ans.push(curr);
    } else {
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
  }

  return ans;
};

console.log(merge(intervals));
