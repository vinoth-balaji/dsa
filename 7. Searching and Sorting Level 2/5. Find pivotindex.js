var pivotIndex = function (nums) {
  let sum = 0;
  for (let s of nums) sum += s;

  let lsum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (lsum == sum - nums[i] - lsum) return i;

    lsum += nums[i];
  }

  return -1;
};

let nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));
