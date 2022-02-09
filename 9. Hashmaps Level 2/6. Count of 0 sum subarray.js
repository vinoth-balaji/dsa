var subarray = function (arr, k) {
  let freq = { 0: 1 }; // for index -1

  let ps = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    ps += arr[i];

    if (freq.hasOwnProperty(ps)) {
      count += freq[ps];
      freq[ps] += 1;
    } else {
      freq[ps] = 1;
    }
  }

  // console.log(freq);

  return count;
};

let arr = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];

console.log(subarray(arr));
