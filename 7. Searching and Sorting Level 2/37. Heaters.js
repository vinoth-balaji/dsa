var findRadius = function (houses, heaters) {
  heaters.sort((a, b) => a - b);
  let min = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < houses.length; i++) {
    let dist = BinarySearch_CeilFloor(heaters, houses[i]);
    // console.log(dist);
    min = Math.max(min, dist);
  }
  return min;
};

function BinarySearch_CeilFloor(a, key) {
  let l = 0;
  let h = a.length - 1;

  let floor = Number.POSITIVE_INFINITY;
  let ceil = Number.POSITIVE_INFINITY;

  while (l <= h) {
    let m = parseInt((l + h) / 2);

    if (key > a[m]) {
      floor = a[m];
      l = m + 1;
    } else if (key < a[m]) {
      ceil = a[m];
      h = m - 1;
    } else {
      floor = a[m];
      ceil = a[m];
      break;
    }
  }

  // console.log(floor, ceil);
  return Math.min(key - floor, ceil - key);
}

let houses = [1, 2, 3, 4],
  heaters = [1, 4];

console.log(findRadius(houses, heaters));
