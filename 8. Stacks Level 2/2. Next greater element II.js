var nextGreaterElements = function (nums) {
  let ans = [];
  let stack = [];

  for (let j = nums.length - 2; j >= 0; j--) {
    let item = nums[j];
    if (stack.length == 0) {
    } else {
      while (stack[stack.length - 1] <= item) {
        stack.pop();
      }
    }
    stack.push(item);
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    let item = nums[j];
    if (stack.length == 0) {
      ans.unshift(-1);
    } else {
      while (stack[stack.length - 1] <= item) {
        stack.pop();
      }
      if (stack.length == 0) ans.unshift(-1);
      else ans.unshift(stack[stack.length - 1]);
    }
    stack.push(item);
  }

  return ans;
};

let nums = [1, 2, 3, 2, 1];

console.log(nextGreaterElements(nums));
