var find132pattern = function (nums) {
  let stack = [];
  let lmin = [];

  let min = nums[0];
  for (let n of nums) {
    min = Math.min(min, n);
    lmin.push(min);
  }

  for (let k = nums.length - 1; k >= 0; k--) {
    let i = lmin[k];
    let j = nums[k];

    // removing all elements where elements are < i  => we get all elements >i
    while (stack.length > 0 && stack[stack.length - 1] <= i) stack.pop();

    // checking if j<k
    if (stack.length > 0 && stack[stack.length - 1] < j) {
      return true;
    }

    stack.push(j);
  }

  return false;
};
let nums = [3, 1, 4, 2];

console.log(find132pattern(nums));
