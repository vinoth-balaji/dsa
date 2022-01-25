var findMin = function (nums) {
  let l = 0,
    r = nums.length - 1;

  // if element not rotated at all
  if (nums[0] < nums[nums.length - 1]) return nums[0];

  while (l <= r) {
    let m = parseInt((l + r) / 2);

    if (nums[m - 1] < nums[m] && nums[m + 1] > nums[m]) {
      if (nums[l] <= nums[m]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    } else if (nums[m] > nums[m + 1]) {
      return nums[m + 1];
    } else {
      return nums[m];
    }
  }

  return -1;
};
let nums = [11, 13, 15, 17];

console.log(findMin(nums));
