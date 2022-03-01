const combinations = function (string, hashMap, k, ci, cc, ans) {
  // console.log(hashMap, ans);

  if (cc == string.length) {
    console.log(ans);
    return;
  }

  for (let i = ci; i < string.length; i++) {
    let ch = string[i];
    if (hashMap.get(ch) > 0) {
      hashMap.set(ch, hashMap.get(ch) - 1);
      combinations(string, hashMap, k, i, cc + 1, ans + ch);
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

// console.log(hashMap, unique);
console.log(combinations(unique, hashMap, k, 0, 0, ""));
