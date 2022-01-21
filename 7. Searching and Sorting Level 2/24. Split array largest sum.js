var splitArray = function (nums, m) {
  let min = 0,
    max = 0;
  for (let n of nums) {
    max += n;
    min = Math.max(min, n);
  }

  let ans = 0;
  while (min <= max) {
    let mid = parseInt((min + max) / 2);

    if (combination(mid, nums, m) == true) {
      ans = mid;
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return ans;
};

var combination = function (maxSum, nums, m) {
  let s = 1;
  let sum = 0;

  for (let n of nums) {
    sum += n;
    if (sum > maxSum) {
      sum = n;
      s++;
    }
    if (s > m) return false;
  }

  return true;
};

let nums = [7, 2, 5, 10, 8],
  m = 2;
console.log(splitArray(nums, m));
