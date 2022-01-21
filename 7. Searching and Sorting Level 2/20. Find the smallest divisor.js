var smallestDivisor = function (nums, threshold) {
  let l = 0,
    r = 0;
  for (let p of nums) r = Math.max(r, p);

  let min = 0;

  while (l <= r) {
    let m = parseInt((l + r) / 2);

    let summ_of_divisions = 0;
    for (let p of nums) summ_of_divisions += Math.ceil(p / m);
    if (summ_of_divisions <= threshold) {
      min = m;
      r = m - 1;
    } else l = m + 1;
  }

  return min;
};

let nums = [1, 2, 5, 9],
  threshold = 6;
console.log(smallestDivisor(nums, threshold));
