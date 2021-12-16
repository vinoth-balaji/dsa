let a = [3, 2, 1, -7, 4, 5, 6, -8];

let min1 = Number.POSITIVE_INFINITY,
  min2 = Number.POSITIVE_INFINITY,
  max1 = Number.NEGATIVE_INFINITY,
  max2 = Number.NEGATIVE_INFINITY,
  max3 = Number.NEGATIVE_INFINITY;

for (let i = 0; i < a.length; i++) {
  if (a[i] < min1) {
    min2 = min1;
    min1 = a[i];
  } else if (a[i] < min2) {
    min2 = a[i];
  }

  if (a[i] > max1) {
    max3 = max2;
    max2 = max1;
    max1 = a[i];
  } else if (a[i] > max2) {
    max3 = max2;
    max2 = a[i];
  } else if (a[i] > max3) {
    max3 = a[i];
  }
}

console.log(Math.max(min1 * min2 * max1, max1 * max2 * max3));
