// let s = 'abbbbbbbbbbbbbbbbbbba';
let s = "bbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbccbcbcbccbbabbb";

var minimumLength = function (s) {
  let i = 0,
    j = s.length - 1;

  for (i, j; i < j; ) {
    if (s[i] == s[j]) {
      let char = s[i];

      while (s[i] == char || s[j] == char) {
        if (s[i] == char) i++;
        if (s[j] == char) j--;
      }
    } else break;

    // console.log(i, j, s.substring(i, j + 1));
  }

  if (i > j) return 0;
  return j - i + 1;
};

console.log(minimumLength(s));
