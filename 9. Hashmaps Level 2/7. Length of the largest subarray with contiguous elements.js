var subarray = function (arr, k) {
  let freq = {};
  for (let v of arr) {
    if (!freq.hasOwnProperty(v)) {
      freq[v] = 1;
    } else freq[v] += 1;
  }
  // console.log(freq);
  // formula = max-min = j-i

  let size = 1;
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i],
      max = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (freq[arr[j]] > 1) break;

      min = Math.min(min, arr[j]);
      max = Math.max(max, arr[j]);

      if (max - min == j - i) {
        size = Math.max(size, j - i + 1);
      }
    }
  }

  // console.log(freq);

  return size;
};

let arr = [1, 56, 58, 57, 90, 92, 94, 93, 91, 45];

console.log(subarray(arr));
