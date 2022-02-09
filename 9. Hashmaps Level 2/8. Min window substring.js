var minWindow = function (s, t) {
  if (t.length > s.length) return "";

  let ans = "";

  let map1 = {};
  for (let v of t) {
    if (!map1.hasOwnProperty(v)) {
      map1[v] = 1;
    } else map1[v] += 1;
  }

  let mapCount = 0;
  let map2 = {};
  let i = 0,
    j = 0;

  while (true) {
    // acquire
    while (i < s.length && mapCount < t.length) {
      let ch = s[i];

      if (!map2.hasOwnProperty(ch)) {
        map2[ch] = 1;
      } else map2[ch] += 1;

      if (map2[ch] <= map1[ch]) mapCount++;
      i++;
    }

    // release
    while (j <= i && mapCount == t.length) {
      let sub = s.substring(j, i);
      if (ans.length == 0 || sub.length < ans.length) ans = sub;

      let ch = s[j];

      if (map2[ch] == 1) {
        delete map2[ch];
      } else map2[ch] -= 1;

      if ((map2.hasOwnProperty(ch) ? map2[ch] : 0) < map1[ch]) mapCount--;
      j++;
    }

    if (i == s.length) break;
  }

  return ans;
};

let s = "cabwefgewcwaefgcf";
t = "cae";
console.log(minWindow(s, t));
