var MaxHeap = require("./../0. DS Implementation/2. MaxHeap.js");

let nums = [1, 1, 1, 2, 2, 3],
  k = 2;
var topKFrequent = function (nums, k) {
  let map = new Map();
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  let pq = new MaxHeap(1);
  for (const [key, value] of map.entries()) {
    pq.insert([key, value]);
  }

  for (let i = 0; i < k; i++) {
    let max = pq.extract_max();
    ans.push(max[0]);
  }
  return ans;
};

console.log(topKFrequent(nums, k));
