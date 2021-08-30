var a = [10, 20, 20, 30, 30, 30, 30, 80, 90, 100];

function BinarySearch(a, key) {
  let l = 0;
  let h = a.length - 1;

  let lastIndex = -1;

  while (l <= h) {
    let m = parseInt((l + h) / 2);

    if (key > a[m]) {
      l = m + 1;
    } else if (key < a[m]) {
      h = m - 1;
    } else {
      lastIndex = m;
      l = m + 1;
    }
  }
  return lastIndex;
}

console.log(BinarySearch(a, 30));

// to find first index use : h=m-1
