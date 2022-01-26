var nextGreaterElement = function (nums1, nums2) {
  let map = {};
  let stack = [];

  map[nums2[nums2.length - 1]] = -1;
  stack.push(nums2[nums2.length - 1]);

  for (let j = nums2.length - 1; j >= 0; j--) {
    let item = nums2[j];
    if (stack.length == 0) {
      map[item] = -1;
    } else {
      while (stack[stack.length - 1] <= item) {
        stack.pop();
      }
      map[item] = stack.length == 0 ? -1 : stack[stack.length - 1];
    }
    stack.push(item);
  }
  let ans = [];
  for (let n of nums1) ans.push(map[n]);
  return ans;
};

let nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];

console.log(nextGreaterElement(nums1, nums2));
