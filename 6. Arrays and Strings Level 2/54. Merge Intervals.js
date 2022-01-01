var merge = function (intervals) {
  let ans = [];

  intervals = intervals.sort((a, b) => a[0] - b[0]);
  ans.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    let curr = intervals[i];
    let prev = ans[ans.length - 1];

    if (curr[0] <= prev[1]) {
      if (curr[1] > prev[1]) {
        prev[1] = curr[1];
      }
    } else ans.push(curr);
  }

  return ans;
};

let intervals = [
  [1, 4],
  [4, 5],
];
console.log(merge(intervals));
