var countkDist = function (s, k) {
  let ans = "";

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
        let sub = s.substring(j, i);
        if (sub.length > ans.length) ans = sub;
      }
    }

    // release
    while (j <= i) {
      let ch = s[j];
      j++;
      if (map[ch] == 1) delete map[ch];
      else map[ch] -= 1;

      if (Object.keys(map).length == k) {
        break;
      }
    }

    // break;
    if (i == s.length) break;
  }

  return ans;
};

let s = "aabcbcdbca",
  k = 2;
console.log(countkDist(s, k));
