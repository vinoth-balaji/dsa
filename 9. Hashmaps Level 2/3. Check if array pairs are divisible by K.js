var canArrange = function (arr, k) {
  let freq = {};
  for (v of arr) {
    // let rem = Math.abs(v % k);
    let rem = ((v % k) + k) % k;
    if (freq.hasOwnProperty(rem)) {
      freq[rem] += 1;
    } else {
      freq[rem] = 1;
    }
  }
  console.log(freq);
  for (v of arr) {
    let rem = ((v % k) + k) % k;
    // console.log(rem, k / 2);
    if (rem == 0 || rem == k / 2) {
      if (freq[rem] % 2 == 1) return false;
    } else if (!(freq[rem] == freq[k - rem])) {
      // console.log(freq[rem], freq[k - rem], k - rem, rem);
      return false;
    }
  }

  return true;
};

let arr = [-1, 1, -2, 2, -3, 3, -4, 4],
  k = 3;

// let arr = [1, 2, 3, 4, 5, 10, 6, 7, 8, 9],
//   k = 5;
console.log(canArrange(arr, k));
