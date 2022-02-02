var minRemoveToMakeValid = function (s) {
  let stack = [];
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(i);
    } else if (s[i] == ")") {
      if (stack.length) stack.pop();
      else s[i] = ".";
    }
  }

  while (stack.length) {
    let b = stack.pop();
    s[b] = ".";
  }

  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] != ".") ans += s[i];
  }
  return ans;
};

let s = "lee(t(c)o)de)";

console.log(minRemoveToMakeValid(s));
