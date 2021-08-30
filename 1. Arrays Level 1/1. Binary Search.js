var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function BinarySearch(a, key) {
  let l = 0;
  let h = a.length - 1;
  while (l <= h) {
    let m = parseInt((l + h) / 2);

    if (key > a[m]) {
      l = m + 1;
    } else if (key < a[m]) {
      h = m - 1;
    } else {
      return m;
    }
  }
  return -1;
}

console.log(BinarySearch(a, 70));
