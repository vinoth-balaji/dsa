var consecutiveOnes = function (s, k) {
  let ans = "";

  let map = {};
  let i = 0,
    j = 0;

  while (true) {
    // acquire
    while (i < s.length) {
      let ch = s[i];

      if (!map.hasOwnProperty(ch)) {
        map[ch] = 1;
      } else map[ch] += 1;

      if (map["0"] == k + 1) {
        map["0"] -= 1;

        // console.log(i, j);
        let sub = s.substring(j, i);
        // console.log(sub);
        if (sub.length > ans.length) ans = sub;
        break;
      }

      i++;
    }

    // release
    while (j <= i) {
      let ch = s[j];
      if (ch == "0") {
        map["0"] -= 1;
        j++;
        break;
      } else {
        let sub = s.substring(j, i);
        if (sub.length > ans.length) ans = sub;
      }
      j++;
    }
    // console.log(i,j)

    // break;
    if (i == s.length) break;
  }

  return ans;
};

let s = "110011",
  k = 2;
console.log(consecutiveOnes(s, k));
