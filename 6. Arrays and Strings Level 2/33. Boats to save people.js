let a = [7, 6, 2, 6, 9, 8, 8, 9, 10, 11];

a = a.sort(function (a, b) {
  return a - b;
});
let t = 14;
let pairs = [];

let i = 0,
  j = a.length - 1;

let count = 0;

while (i < j) {
  let target = a[i] + a[j];

  if (target <= t) {
    count++;

    i++;
    j--;
  } else {
    count++;
    j--;
  }
}

console.log(count);
