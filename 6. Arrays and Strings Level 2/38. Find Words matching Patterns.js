let words = ["mno", "rst", "rss", "bll", "lml", "aaa"];
let pattern = "abb";

let hashmap = new Map();

// to keep track of chars already mapped - for scenarios like aaa and pattern abb
let set = new Map();
let matches = [];

for (let w of words) {
  hashmap.clear();
  set.clear();
  let flag = false;
  for (let i = 0; i < w.length; i++) {
    let c = w[i];
    if (hashmap.has(pattern[i])) {
      let map = hashmap.get(pattern[i]);
      if (map != c) {
        flag = true;
        break;
      }
    } else {
      if (set.has(c)) {
        flag = true;
        break;
      } else {
        set.set(c, 1);
      }
      hashmap.set(pattern[i], c);
    }
  }

  if (!flag) matches.push(w);
}
console.log(matches);
