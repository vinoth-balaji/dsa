var removeOuterParentheses = function (s) {
  let stack = [];
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(i);
    } else if (s[i] == ")") {
      let last;
      if (stack.length) {
        last = stack.pop();
      }

      if (!stack.length) {
        s[i] = ".";
        s[last] = ".";
      }
    }
  }

  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] != ".") ans += s[i];
  }
  return ans;
};

let s = "(()())(())";

console.log(removeOuterParentheses(s));
