const combinations = function (string, completed, hashMap, k, ci, ans) {
  // console.log(hashMap, ans);

  if (completed == k) {
    console.log(ans);
    return;
  }

  for (let i = ci; i < string.length; i++) {
    let ch = string[i];
    if (hashMap.get(ch) > 0) {
      hashMap.set(ch, hashMap.get(ch) - 1);
      combinations(string, completed + 1, hashMap, k, i, ans + ch);
      hashMap.set(ch, hashMap.get(ch) + 1);
    }
  }
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

// console.log(hashMap);
console.log(combinations(unique, 0, hashMap, k, 0, ""));
