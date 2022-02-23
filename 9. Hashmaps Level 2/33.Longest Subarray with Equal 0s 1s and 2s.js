var findMaxLength = function (nums) {
  let map = { 0: -1 },
    length = 0;

  let ps = 0;
  for (let i = 0; i < nums.length; i++) {
    ps += nums[i] == 0 ? -2 : nums[i] == 1 ? -1 : 3;

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

let nums = [0, 1, 0, 2, 0, 1, 0];
console.log(findMaxLength(nums));

// --------------------- optimized

var findMaxLength = function (nums) {
  let ps = { 0: 0, 1: 0, 2: 0 },
    map = { "0#0": -1 },
    length = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      ps[0] += 1;
    } else if (nums[i] == 1) {
      ps[1] += 1;
    } else {
      ps[2] += 1;
    }
    let diff = ps[1] - ps[0] + "#" + (ps[2] - ps[1]);
    // console.log(diff);

    if (map.hasOwnProperty(diff)) {
      let len = i - map[diff];
      if (len > length) length = len;
    } else {
      map[diff] = i;
    }
  }
  // console.log(map);

  return length;
};

let nums = [0, 1, 0, 2, 0, 1, 0];
console.log(findMaxLength(nums));
