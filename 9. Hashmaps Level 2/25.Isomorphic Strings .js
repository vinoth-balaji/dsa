var isIsomorphic = function (s, t) {
  let map = {},
    visited = {};

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (!map.hasOwnProperty(ch)) {
      if (visited.hasOwnProperty(t[i])) return false;

      visited[t[i]] = true;

      map[ch] = t[i];
    } else {
      if (map[ch] != t[i]) return false;

      map[ch] = t[i];
    }
  }

  return true;
};

let s = "bbbaaaba",
  t = "aaabbbba";
console.log(isIsomorphic(s, t));
