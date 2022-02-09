var distinct = function (arr, k) {
  let freq = {};
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < k) {
      freq[arr[i]] = 1;
    } else {
      res.push(Object.keys(freq).length);
      if (freq[arr[i - k]] > 0) {
        freq[arr[i - k]] -= 1;
      } else delete freq[arr[i - k]];
      freq[arr[i]] = 1;
    }
  }
  res.push(Object.keys(freq).length);

  return res;
};

let arr = [1, 2, 1, 3, 4, 2, 3];
k = 4;

console.log(distinct(arr, k));
