const permutations = function (string, completed, lastOccurence, k, cc, spots) {
  //   console.log(hashMap, spots);

  if (completed == string.length) {
    if (cc == k) console.log(spots.join(""));
    return;
  }

  let ch = string[completed];
  let lo = lastOccurence.get(ch);

  for (let i = lo + 1; i < spots.length; i++) {
    if (spots[i] == null) {
      spots[i] = ch;
      lastOccurence.set(ch, i);
      permutations(string, completed + 1, lastOccurence, k, cc + 1, spots);
      lastOccurence.set(ch, -1);
      spots[i] = null;
    }
  }

  if (lo == -1)
    permutations(string, completed + 1, lastOccurence, k, cc, spots);
};

let string = "aabbac";
let hashMap = new Map();
k = 3;
for (let s of string) {
  hashMap.set(s, -1);
}
let spots = [];
for (let i = 0; i < k; i++) spots.push(null);

// console.log(hashMap);
console.log(permutations(string, 0, hashMap, k, 0, spots));
