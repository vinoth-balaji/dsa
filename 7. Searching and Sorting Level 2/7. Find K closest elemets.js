var findClosestElements = function (arr, k, x) {
  let l = 0,
    r = arr.length - 1,
    m;

  let ans = [];
  while (l <= r) {
    m = parseInt((l + r) / 2);
    if (arr[m] == x) {
      break;
    } else if (x > arr[m]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  m = arr[m] == x ? m : l;
  // console.log(m);

  l = m - 1;
  r = m;

  while (l >= 0 && r <= arr.length - 1 && k > 0) {
    if (Math.abs(arr[l] - x) <= Math.abs(arr[r] - x)) {
      ans.push(arr[l]);
      l--;
    } else {
      ans.push(arr[r]);
      r++;
    }
    k--;
  }

  while (k > 0 && l >= 0) {
    ans.push(arr[l]);
    l--;
    k--;
  }
  while (k > 0 && r <= arr.length - 1) {
    ans.push(arr[r]);
    r++;
    k--;
  }

  ans.sort((a, b) => a - b);

  return ans;
};

var arr = [1, 5, 10],
  k = 1,
  x = 4;

console.log(findClosestElements(arr, k, x));
