MAX_HEAPIFY = function (a, i, keyIndex) {
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  let largest = i;

  if (l < a.length && a[l][keyIndex] > a[largest][keyIndex]) largest = l;
  if (r < a.length && a[r][keyIndex] > a[largest][keyIndex]) largest = r;
  if (i != largest) {
    [a[i], a[largest]] = [a[largest], a[i]];
    MAX_HEAPIFY(a, largest, keyIndex);
  }
};

EXTRACT_MAX = function (a, keyIndex) {
  max = a[0];
  a[0] = a[a.length - 1];
  a.pop();
  MAX_HEAPIFY(a, 0, keyIndex);
  return max;
};

INSERT_KEY = function (a, val, keyIndex) {
  a.push(val);
  let i = a.length - 1;

  if (i > 0)
    for (let i = parseInt(a.length / 2 - 1); i >= 0; i--) {
      MAX_HEAPIFY(a, i, keyIndex);
    }
};

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

  let pq = [];
  for (const [key, value] of map.entries()) {
    INSERT_KEY(pq, [key, value], 1);
  }

  for (let i = 0; i < k; i++) {
    let max = EXTRACT_MAX(pq, 1);
    ans.push(max[0]);
  }
  return ans;
};

console.log(topKFrequent(nums, k));
