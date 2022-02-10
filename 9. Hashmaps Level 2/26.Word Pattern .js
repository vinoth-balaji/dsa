var wordPattern = function (pattern, s) {
  let map = {},
    visited = {};

  s = s.split(" ");
  if (s.length != pattern.length) return false;

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (!map.hasOwnProperty(ch)) {
      if (visited.hasOwnProperty(pattern[i])) return false;

      visited[pattern[i]] = true;

      map[ch] = pattern[i];
    } else {
      if (map[ch] != pattern[i]) return false;

      map[ch] = pattern[i];
    }
  }

  return true;
};

let pattern = "abba",
  s = "dog cat cat dog";
console.log(wordPattern(pattern, s));
