var subarraysDivByK = function (nums, k) {
  let map = { 0: -1 },
    length = 0;

  let ps = 0;
  for (let i = 0; i < nums.length; i++) {
    ps += nums[i];

    let rem = ps % k;
    if (rem < 0) rem += k;

    if (map.hasOwnProperty(rem)) {
      let len = i - map[rem];
      if (len > length) length = len;
    } else {
      map[rem] = i;
    }
  }
  // console.log(map);

  return length;
};

let nums = [4, 5, 2, -2, -3, 1],
  k = 5;
console.log(subarraysDivByK(nums, k));
