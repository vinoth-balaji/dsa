let a = [5, 2, 3, 80, 5, 20];
let diff = 17;
a.sort((a, b) => a - b);
let i = 0,
  j = 1;

while (i <= a.length - 1 && j <= a.length - 1 && i <= j) {
  let d = a[j] - a[i];
  if (d == diff) {
    console.log(a[i], a[j]);
    break;
  } else if (d > diff) i++;
  else j++;
}
