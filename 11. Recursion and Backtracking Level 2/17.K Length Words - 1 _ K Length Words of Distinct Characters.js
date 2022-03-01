const KLenWords = function (string, cc, spots, k, comp) {
  // console.log(spots);

  if (cc == string.length) {
    if (comp == k) console.log(spots.join(""));
    return;
  }
  let ch = string[cc];
  for (let i = 0; i < spots.length; i++) {
    if (spots[i] == null) {
      spots[i] = ch;
      KLenWords(string, cc + 1, spots, k, comp + 1);
      spots[i] = null;
    }
  }

  KLenWords(string, cc + 1, spots, k, comp);
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

let spots = [];
for (let i = 0; i < k; i++) spots.push(null);
console.log(KLenWords(unique, 0, spots, k, 0));
