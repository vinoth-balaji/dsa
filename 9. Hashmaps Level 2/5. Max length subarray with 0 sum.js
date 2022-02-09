var subarray = function (arr, k) {
  let freq = {};

  let ps = 0;
  let size = 0;
  freq[0] = -1;
  for (let i = 0; i < arr.length; i++) {
    ps += arr[i];

    if (freq.hasOwnProperty(ps)) {
      size = Math.max(size, i - freq[ps]);
    } else {
      freq[ps] = i;
    }
  }

  return size;
};

let arr = [15, -2, 2, -8, 1, 7, 10, 23];

console.log(subarray(arr));
