var searchRange = function (nums, target) {
  let ans = [-1, -1];

  let l = 0,
    r = nums.length - 1;

  // firstIndex
  while (l <= r) {
    let m = parseInt((l + r) / 2);
    if (nums[m] == target) {
      ans[0] = m;
      r = m - 1;
    } else if (target > nums[m]) {
      l = m + 1;
    } else r = m - 1;
  }

  // lastIndex
  l = 0;
  r = nums.length - 1;
  while (l <= r) {
    let m = parseInt((l + r) / 2);
    if (nums[m] == target) {
      ans[1] = m;
      l = m + 1;
    } else if (target > nums[m]) {
      l = m + 1;
    } else r = m - 1;
  }

  return ans;
};

let nums = [5, 7, 7, 8, 8, 10],
  target = 8;

console.log(searchRange(nums, target));
