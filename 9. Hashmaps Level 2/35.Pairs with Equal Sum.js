var pairWithEqualSum = function (nums) {
  let map = {};
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];

      if (map.hasOwnProperty(sum)) {
        map[sum].push([nums[i], nums[j]]);
      } else {
        map[sum] = [[nums[i], nums[j]]];
      }
    }
  }

  Object.keys(map).forEach((k) => {
    if (map[k].length > 1) ans.push(map[k]);
  });

  // console.log(map);

  return ans;
};

let nums = [6, 4, 12, 10, 22, 54, 32, 42, 21, 11];
console.log(pairWithEqualSum(nums));
