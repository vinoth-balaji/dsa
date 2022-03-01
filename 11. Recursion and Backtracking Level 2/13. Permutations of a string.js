const permutations = function (string, hashMap, ans) {
  //   console.log(hashMap, ans);

  if (ans.length == string.length) {
    console.log(ans);
    return;
  }

  for (let key of hashMap.keys()) {
    if (hashMap.get(key) > 0) {
      hashMap.set(key, hashMap.get(key) - 1);
      permutations(string, hashMap, ans + key);
      hashMap.set(key, hashMap.get(key) + 1);
    }
  }
};

let string = "aabb";
let hashMap = new Map();
for (let s of string) {
  if (hashMap.has(s)) {
    hashMap.set(s, hashMap.get(s) + 1);
  } else hashMap.set(s, 1);
}
// console.log(hashMap);
console.log(permutations(string, hashMap, ""));
