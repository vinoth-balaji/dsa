var partition = function (i, nums, k, comp, subsets, sum, ans) {
  if (ans[0]) return;

  if (i >= nums.length) {
    if (comp == k) {
      let flag = false;
      for (let i = 1; i < sum.length; i++) {
        if (sum[i - 1] != sum[i]) {
          flag = true;
          break;
        }
      }
      // console.log(sum)

      if (!flag) {
        ans[0] = true;
        console.log(true);
        return true;
      }
    }
    return;
  }

  for (let j = 0; j < k; j++) {
    if (!ans[0]) {
      if (subsets[j].length > 0) {
        subsets[j].push(nums[i]);
        sum[j] += nums[i];
        partition(i + 1, nums, k, comp, subsets, sum, ans);
        subsets[j].pop();
        sum[j] -= nums[i];
      } else {
        subsets[j].push(nums[i]);
        sum[j] += nums[i];
        partition(i + 1, nums, k, comp + 1, subsets, sum, ans);
        subsets[j].pop();
        sum[j] -= nums[i];
        break;
      }
    }
  }
};

let subsets = [],
  sum = [],
  k = 2,
  nums = [1, 5, 11, 5];
ans = [false];

for (let i = 0; i < k; i++) {
  subsets.push([]);
  sum.push(0);
}

console.log(partition(0, nums, k, 0, subsets, sum, ans));
