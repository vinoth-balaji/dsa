var subarraySum = function (nums, k) {
  let map = { 0: 1 },
    count = 0;

  let ps = 0;
  for (let i = 0; i < nums.length; i++) {
    ps += nums[i];

    let diff = ps - k;
    if (map.hasOwnProperty(diff)) {
      count += map[diff];
    }

    if (!map.hasOwnProperty(ps)) {
      map[ps] = 1;
    } else map[ps] += 1;
  }
  console.log(map);

  return count;
};

let nums = [1, -1, 0],
  k = 0;
console.log(subarraySum(nums, k));
