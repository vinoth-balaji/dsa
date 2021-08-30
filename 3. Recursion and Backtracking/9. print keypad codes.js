let charCodes = [
  ".;",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tu",
  "vwx",
  "yz",
];

let s = "678";

function codes(s) {
  if (s.length == 0) return [""];

  let char = s[0];
  let seq = codes(s.substring(1));
  let list = [];

  for (let c of charCodes[parseInt(char)]) {
    for (let sub of seq) {
      list.push(c + sub);
    }
  }
  return list;
}

console.log(codes(s));
