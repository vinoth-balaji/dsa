var findCount = function (nums) {
  let ps = { 0: 0, 1: 0, 2: 0 },
    map = { "0#0": 1 },
    count = 0;

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
      count += map[diff];
      map[diff] += 1;
    } else {
      map[diff] = 1;
    }
  }
  // console.log(map);

  return count;
};

let nums = "102100211";
console.log(findCount(nums));
