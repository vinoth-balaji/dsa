let s = "abcdefghfedcba";

function isValidPalin2(s) {
  for (let i = 0, j = s.length - 1; i < j; ) {
    if (s[i] == s[j]) {
      i++, j--;
    } else {
      let skip1stLeftChar = isPalin(s.substring(i + 1, j + 1));
      let skip1stRightChar = isPalin(s.substring(i, j));

      return skip1stLeftChar || skip1stRightChar;
    }
  }
  return true;
}
function isPalin(s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] != s[j]) return false;
  }

  return true;
}

console.log(isValidPalin2(s));
