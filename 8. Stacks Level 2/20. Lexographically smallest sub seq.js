var mostCompetitive = function (nums, k) {
  if (nums.length == k) return nums;

  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];

    // requirement = k - ans.length
    // remaining = nums.length - (i + 1)
    while (
      ans.length > 0 &&
      val < ans[ans.length - 1] &&
      nums.length - (i + 1) >= k - ans.length
    ) {
      ans.pop();
    }

    if (ans.length < k) {
      ans.push(val);
    }
  }

  return ans;
};

let nums = [2, 4, 3, 3, 5, 4, 9, 6],
  k = 4;

console.log(mostCompetitive(nums, k));
