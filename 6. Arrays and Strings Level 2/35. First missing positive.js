var firstMissingPositive = function (nums) {
  let isOneMissing = false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      isOneMissing = true;
    } else if ((nums[i] > nums.length) | (nums[i] <= 0)) {
      nums[i] = 1;
    }
  }

  if (!isOneMissing) return 1;

  for (let i = 0; i < nums.length; i++) {
    let idx = Math.abs(nums[i]);

    nums[idx - 1] = -Math.abs(nums[idx - 1]);
  }

  let i = 0;
  for (i; i < nums.length; i++) {
    if (nums[i] > 0) break;
  }

  return i + 1;
};

let nums = [7, 8, 9, 11, 12];
console.log(firstMissingPositive(nums));
