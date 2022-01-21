var minEatingSpeed = function (piles, h) {
  let l = 0,
    r = 0;
  for (let p of piles) r = Math.max(r, p);

  let min = 0;

  while (l <= r) {
    let m = parseInt((l + r) / 2);

    let hours = 0;
    for (let p of piles) hours += Math.ceil(p / m);
    if (hours <= h) {
      min = m;
      r = m - 1;
    } else l = m + 1;
  }

  return min;
};

let piles = [3, 6, 7, 11],
  h = 8;
console.log(minEatingSpeed(piles, h));
