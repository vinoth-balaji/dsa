var removeInvalidParentheses = function (s) {
  visited = new Set();
  let minRemoval = minBarcketstoRemove(s);
  let ans = new Set();
  validSeq(s, minRemoval, ans);
  return Array.from(ans);
};

var validSeq = function (s, remove, ans) {
  //for optimization
  if (visited.has(s)) return;
  visited.add(s);

  if (remove == 0) {
    // console.log(s);
    if (!ans.has(s) && minBarcketstoRemove(s) == 0) {
      ans.add(s);
    }
    return;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] == ")" || s[i] == "(") {
      let left = s.substring(0, i);
      let right = s.substring(i + 1);
      // console.log(left);
      validSeq(left + right, remove - 1, ans);
    }
  }
};

var minBarcketstoRemove = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") stack.push("(");
    else if (s[i] == ")") {
      if (stack.length == 0) stack.push(")");
      else if (stack[stack.length - 1] == ")") stack.push(")");
      else stack.pop();
    }
  }

  return stack.length;
};

let s = "()())()";
console.log(removeInvalidParentheses(s));
