var subarraysDivByK = function (nums, k) {
  let map = { 0: 1 },
    count = 0;

  let ps = 0;
  for (let i = 0; i < nums.length; i++) {
    ps += nums[i];

    let rem = ps % k;
    if (rem < 0) rem += k;

    if (map.hasOwnProperty(rem)) {
      count += map[rem];
      map[rem] += 1;
    } else {
      map[rem] = 1;
    }
  }
  // console.log(map);

  return count;
};

let nums = [4, 5, 0, -2, -3, 1],
  k = 5;
console.log(subarraysDivByK(nums, k));
