let a = [1, 2, 3, 2, 5, 4];

let left = [],
  right = [],
  result = [];

left[0] = a[0];
right[a.length - 1] = a[a.length - 1];

for (let i = 1, j = a.length - 2; i < a.length; i++, j--) {
  left[i] = left[i - 1] * a[i];
  right[j] = right[j + 1] * a[j];
}
console.log(left);
result[0] = right[1];
result[a.length - 1] = left[a.length - 2];
for (let i = 1; i < a.length - 1; i++) {
  let lp = left[i - 1];
  let rp = right[i + 1];

  result[i] = lp * rp;
}
console.log(result);

// optimized approach

// calculating either left or right and storing it in result itself, and calculating the other while filling the result
// space O(1)
var productExceptSelf = function (nums) {
  let ans = [];
  for (i = nums.length - 1; i >= 0; i--) {
    if (i == nums.length - 1) {
      ans[i] = nums[i];
    } else {
      ans[i] = nums[i] * ans[i + 1];
    }
  }
  let p = nums[0];
  ans[0] = ans[1];
  for (let i = 1; i < nums.length; i++) {
    ans[i] = p * (i + 1 < nums.length ? ans[i + 1] : 1);
    p *= nums[i];
  }

  return ans;
};
