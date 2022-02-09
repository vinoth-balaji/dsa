var lengthOfLongestSubstring = function (s) {
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

      if (map[ch] > 1) {
        break;
      } else {
        count += i - j; //its not i-j+1 as i is already incremented
        // console.log(s.substring(j, i));
      }
    }
    // console.log(map);
    // release
    while (j < i) {
      let ch = s[j];
      map[ch] -= 1;
      j++;
      if (map[ch] == 1) {
        count += i - j; // after removing the dupicate count the substrings - abcb
        break;
      }
    }
    if (i == s.length) break;
  }

  return count;
};

let s = "aabcbcdbca";
console.log(lengthOfLongestSubstring(s));
