var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function BinarySearch(a, key) {
  let l = 0;
  let h = a.length - 1;

  let floor = Number.NEGATIVE_INFINITY;
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
      console.log(floor, ceil);
      return;
    }
  }

  console.log(floor, ceil);
}

BinarySearch(a, 71);
