var subarray = function (array) {
  let freq = {};

  let hf = 0,
    length = 0,
    s = -1,
    e = -1;

  for (let i = 0; i < array.length; i++) {
    let a = array[i];
    if (freq.hasOwnProperty(a)) {
      freq[a][0] += 1;
    } else {
      // [freq,start index]
      freq[a] = [1, i];
    }

    if (freq[a][0] >= hf && i - freq[a][1] + 1 >= length) {
      // console.log(a);
      hf = freq[a][0];
      length = i - freq[a][1] + 1;
      s = freq[a][1];
      e = i;
    }
  }

  console.log(s, e);
};

let array = [4, 1, 1, 2, 2, 1, 3, 3];
console.log(subarray(array));
