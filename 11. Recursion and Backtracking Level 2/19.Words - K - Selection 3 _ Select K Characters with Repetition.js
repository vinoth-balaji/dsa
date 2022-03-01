const combinations = function (string, hashMap, k, ci, ans) {
  // console.log(hashMap, ans);

  if (ci == string.length) {
    if (ans.length == k) console.log(ans);
    return;
  }

  let ch = string[ci];
  if (hashMap.get(ch) > 0) {
    hashMap.set(ch, hashMap.get(ch) - 1);
    combinations(string, hashMap, k, ci, ans + ch);
    hashMap.set(ch, hashMap.get(ch) + 1);
  }

  combinations(string, hashMap, k, ci + 1, ans);
};

let string = "aabbac";
let hashMap = new Map();
let k = 3;
let unique = "";

for (let s of string) {
  if (hashMap.has(s)) {
    hashMap.set(s, hashMap.get(s) + 1);
  } else {
    hashMap.set(s, 1);
    unique += s;
  }
}
// console.log(hashMap, unique);
console.log(combinations(unique, hashMap, k, 0, ""));
