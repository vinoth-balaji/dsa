let a = [7, 3, 9, 5, 10, 1, 15, 16, 19, 14, 80];

let max = a[0],
  leftMax = a[0],
  ans = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] > max) max = a[i];

  if (a[i] < leftMax) {
    ans = i;
    leftMax = max;
  }
}

console.log(ans + 1, " Elements");
