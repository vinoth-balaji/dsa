var removeDuplicateLetters = function (s) {
  let map = {};
  let comp = {};
  let fs = "";
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = i;
  }
  console.log(map);
  for (let i = 0; i < s.length; i++) {
    if (fs.length == 0) {
      fs = s[i];
      comp[s[i]] = 1;
    } else if (!comp.hasOwnProperty(s[i])) {
      while (fs[fs.length - 1] > s[i] && map[fs[fs.length - 1]] > i) {
        delete comp[fs[fs.length - 1]];
        fs = fs.substring(0, fs.length - 1);
      }
      fs = fs + s[i];
      comp[s[i]] = 1;

      // console.log(fs, comp);
    }
  }

  return fs;
};

let s = "cbacdcbc";

console.log(removeDuplicateLetters(s));
