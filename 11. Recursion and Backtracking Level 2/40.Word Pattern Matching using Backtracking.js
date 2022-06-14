var wordPattern = function (s, pattern, map, op) {
  if (pattern == "") {
    if (s == "") {
      let ans = "";
      Object.keys(map).forEach((key) => {
        ans += "    " + key + " : " + map[key];
      });
      console.log(ans);
    }

    return;
  }

  let ch = pattern[0];
  let rop = pattern.substring(1);

  if (map.hasOwnProperty(ch)) {
    let exist = map[ch];
    if (s.length >= exist.length) {
      let left = s.substring(0, exist.length);

      if (left == exist) {
        let right = s.substring(exist.length);
        wordPattern(right, rop, map, op);
      }
    }
  } else {
    for (let i = 0; i < s.length; i++) {
      let left = s.substring(0, i + 1);
      let right = s.substring(i + 1);
      map[ch] = left;
      // console.log('gg', left);
      wordPattern(right, rop, map, op);
      delete map[ch];
    }
  }
};

let s = "graphtreesgraph",
  pattern = "pep";

let map = {};
console.log(wordPattern(s, pattern, map, pattern));
