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

function keypadCodes(s, ans) {
  if (s == 0) {
    console.log(ans);
    return;
  }

  let char = s[0];
  let code = charCodes[parseInt(char)];
  for (let i = 0; i < code.length; i++) {
    keypadCodes(s.substring(1), code[i] + ans);
  }
}

keypadCodes(s, "");

// function keypadCodes(s, ans) {
//   if (s.length == 0) {
//     console.log(ans);
//     return;
//   }

//   for (let i of charCodes[+s[0]]) {
//     keypadCodes(s.substring(1), i + ans);
//   }
// }
