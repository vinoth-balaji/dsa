var MinHeap = require("./../0. DS Implementation/1. MinHeap.js");

let meetings = [
  [1, 3],
  [8, 10],
  [7, 8],
  [9, 15],
  [2, 6],
];

var meetingRooms2 = function (meetings) {
  if (meetings.length == 0) return 0;

  meetings = meetings.sort((a, b) => a[0] - b[0]);
  let minHeap = new MinHeap();
  // let meetingRooms = 0;

  // pushing the end of first meeting
  minHeap.insert(meetings[0][1]);
  // meetingRooms++;

  for (let i = 1; i < meetings.length; i++) {
    let cur = meetings[i];
    if (minHeap.size() > 0) {
      let top = minHeap.top();
      if (cur[0] < top) {
        //the least time in n meeting rooms is greater then the current one, so add new
        minHeap.insert(cur[1]);
      } else {
        // the current one can replace the smallest one, as it would have completed.
        minHeap.extract_min();
        minHeap.insert(cur[1]);
      }

      // meetingRooms = Math.max(meetingRooms, minHeap['heap_size']);
    } else {
      minHeap.insert(cur[1]);
    }
  }

  return minHeap.size();
};
console.log(meetingRooms2(meetings));
