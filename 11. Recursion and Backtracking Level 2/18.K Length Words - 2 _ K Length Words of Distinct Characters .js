const KLenWords = function (string, ci, set, k, ans) {
  // console.log(set);

  if (ci == k) {
    console.log(ans);
    return;
  }
  for (let i = 0; i < string.length; i++) {
    let ch = string[i];
    if (!set.has(ch)) {
      set.add(ch);
      KLenWords(string, ci + 1, set, k, ans + ch);
      set.delete(ch);
    }
  }
};

let string = "abcabc";
let set = new Set();
let unique = "";
let k = 2;
for (let s of string) {
  if (set.has(s)) {
  } else {
    set.add(s, 1);
    unique += s;
  }
}

console.log(KLenWords(unique, 0, new Set(), k, ""));
