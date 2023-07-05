var lengthOfLongestSubstring = function (s) {
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

      if (map[ch] > 1) {
        break;
      } else {
        let sub = s.substring(j, i);
        if (sub.length > ans.length) ans = sub;
      }
    }
    // console.log(map);
    // release
    while (j < i) {
      let ch = s[j];
      map[ch] -= 1;
      j++;
      if (map[ch] == 1) {
        break;
      }
    }
    // console.log(s.substring(j, i));
    // console.log(i, j, ans);
    // break;
    if (i == s.length) break;
  }

  return ans.length;
};

let s = "abcabcdbb";
console.log(lengthOfLongestSubstring(s));
