var countkDist = function (s, k) {
  let count = 0;

  let map = {};
  let i = 0,
    j = 0;

  while (true) {
    // acquire
    while (i < s.length) {
      let ch = s[i];
      i++;

      if (!map.hasOwnProperty(ch)) {
        map[ch] = 1;
      } else map[ch] += 1;

      if (Object.keys(map).length > k) {
        break;
      } else {
        count += i - j;
      }
    }

    // release
    while (j <= i) {
      let ch = s[j];
      j++;
      if (map[ch] == 1) delete map[ch];
      else map[ch] -= 1;

      if (Object.keys(map).length == k) {
        count += i - j;
        break;
      }
    }

    // break;
    if (i == s.length) break;
  }

  return count;
};

let s = "aabcbcdbca",
  k = 2;
console.log(countkDist(s, k));
