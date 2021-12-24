let nums = [1, 12, -5, -6, 50, 3],
  k = 4;

var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  if (nums.length <= k) return sum / k;

  let maxSum = sum;
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum / k;
};

console.log(findMaxAverage(nums, k));
