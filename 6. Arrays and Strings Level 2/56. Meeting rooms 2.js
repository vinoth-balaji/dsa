MIN_HEAPIFY = function (a, i) {
  l = 2 * i + 1;
  r = 2 * i + 2;
  smallest = i;

  if (l < a.heap_size && a[l] < a[smallest]) smallest = l;
  if (r < a.heap_size && a[r] < a[smallest]) smallest = r;
  if (i != smallest) {
    [a[i], a[smallest]] = [a[smallest], a[i]];
    MIN_HEAPIFY(a, smallest);
  }
};

BUILD_HEAP = function (a) {
  a["heap_size"] = a.length;
  for (i = Math.floor(a.heap_size / 2); i >= 0; i--) {
    MIN_HEAPIFY(a, i);
  }
};

EXTRACT_MIN = function (a) {
  min = a[0];
  a[0] = a[a.heap_size - 1];
  a.heap_size = a.heap_size - 1;
  MIN_HEAPIFY(a, 0);
};

INSERT_KEY = function (a, key) {
  a[a["heap_size"]] = key;
  a["heap_size"] += 1;
  let i = a["heap_size"] - 1;
  while (i >= 0 && a[Math.floor(i / 2)] > a[i]) {
    [a[Math.floor(i / 2)], a[i]] = [a[i], a[Math.floor(i / 2)]];
    i = Math.floor(i / 2);
  }
};

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
  let minHeap = [];
  // let meetingRooms = 0;

  // pushing the end of first meeting
  minHeap.push(meetings[0][1]);
  // meetingRooms++;
  BUILD_HEAP(minHeap);

  for (let i = 1; i < meetings.length; i++) {
    let cur = meetings[i];
    if (minHeap["heap_size"] > 0) {
      let top = minHeap[0];
      if (cur[0] < top) {
        //the least time in n meeting rooms is greater then the current one, so add new
        INSERT_KEY(minHeap, cur[1]);
      } else {
        // the current one can replace the smallest one, as it would have completed.
        EXTRACT_MIN(minHeap);
        INSERT_KEY(minHeap, cur[1]);
      }

      // meetingRooms = Math.max(meetingRooms, minHeap['heap_size']);
    } else {
      INSERT_KEY(minHeap, cur[1]);
    }
  }

  return minHeap["heap_size"];
};
console.log(meetingRooms2(meetings));
