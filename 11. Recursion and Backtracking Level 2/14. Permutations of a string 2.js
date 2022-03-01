const permutations = function (string, completed, lastOccurence, ans) {
  //   console.log(hashMap, ans);

  if (completed == string.length) {
    console.log(ans.join(""));
    return;
  }

  let ch = string[completed];
  let lo = lastOccurence.get(ch);

  for (let i = lo + 1; i < ans.length; i++) {
    if (ans[i] == null) {
      ans[i] = ch;
      lastOccurence.set(ch, i);
      permutations(string, completed + 1, lastOccurence, ans);
      lastOccurence.set(ch, -1);
      ans[i] = null;
    }
  }

  // if (lo == -1) permutations(string, completed + 1, lastOccurence, ans);
};

let string = "aabbc";
let hashMap = new Map();
for (let s of string) {
  hashMap.set(s, -1);
}
// console.log(hashMap);
console.log(permutations(string, 0, hashMap, [null, null, null, null, null]));
