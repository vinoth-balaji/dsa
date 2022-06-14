var minimumDifference = function (nums) {
  let ans = [Number.POSITIVE_INFINITY];
  visited = new Set();
  findMin(nums, [[], []], [0, 0], 0, ans);
  return ans[0];
};

var findMin = function (nums, subset, subsetSum, i, ans) {
  if (i == nums.length) {
    let min = Math.abs(subsetSum[0] - subsetSum[1]);

    if (subset[0].length == subset[1].length && min < ans[0]) {
      // console.log(Math.abs(subsetSum[0] - subsetSum[1]), min);

      ans[0] = min;
    }

    return;
  }

  for (let j = 0; j < subset.length; j++) {
    subsetSum[j] += nums[i];
    subset[j].push(nums[i]);
    findMin(nums, subset, subsetSum, i + 1, ans);
    subsetSum[j] -= nums[i];
    subset[j].pop();
  }
};

let nums = [3, 9, 7, 3];
console.log(minimumDifference(nums));
