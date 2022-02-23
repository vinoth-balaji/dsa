var findCount = function (nums) {
  let map = { 0: 1 },
    count = 0;

  let ps = 0;
  for (let i = 0; i < nums.length; i++) {
    ps += nums[i] == 0 ? -1 : 1;

    if (map.hasOwnProperty(ps)) {
      count += map[ps];
      map[ps] += 1;
    } else {
      map[ps] = 1;
    }
  }
  // console.log(map);

  return count;
};

let nums = [1, 0, 0, 1, 0, 1, 1];
console.log(findCount(nums));
