let intervals = [
  [1, 3],
  [8, 10],
  [2, 6],
  [15, 18],
];

var meetingRooms1 = function (intervals) {
  if (intervals.length == 0) return [];

  intervals = intervals.sort((a, b) => a[0] - b[0]);

  let prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let curr = intervals[i];

    // case 1 - No Overlap
    if (curr[0] > prev[1]) {
      prev = curr;
    }
    //case 2 partial overlap or complete overlap
    else if (curr[0] <= prev[1]) {
      return false;
    }
  }

  return true;
};

console.log(meetingRooms1(intervals));
