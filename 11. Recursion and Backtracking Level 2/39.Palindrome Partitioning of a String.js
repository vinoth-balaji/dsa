var palindrome = function (s, i, ans, palin) {
  if (i == s.length) {
    ans.push(JSON.parse(JSON.stringify(palin)));
    return;
  }

  let pal = "";
  for (i; i < s.length; i++) {
    pal += s[i];
    if (checkIfPalin(pal)) {
      palin.push(pal);
      palindrome(s, i + 1, ans, palin);
      palin.pop();
    }
  }
};

var checkIfPalin = function (s) {
  let i = 0,
    j = s.length - 1;
  while (i <= j) {
    if (s[i] != s[j]) return false;
    i++;
    j--;
  }

  return true;
};

// console.log(checkIfPalin('abc',0,2))

let s = "aabab",
  ans = [];
console.log(palindrome(s, 0, ans, []));
console.log(ans);
