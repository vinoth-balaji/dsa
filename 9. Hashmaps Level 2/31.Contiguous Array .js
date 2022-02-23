var findMaxLength = function (nums) {
  let map = { 0: -1 },
    length = 0;

  let ps = 0;
  for (let i = 0; i < nums.length; i++) {
    ps += nums[i] == 0 ? -1 : 1;

    if (map.hasOwnProperty(ps)) {
      let len = i - map[ps];
      if (len > length) length = len;
    } else {
      map[ps] = i;
    }
  }
  // console.log(map);

  return length;
};

let nums = [0, 1, 0];
console.log(findMaxLength(nums));
