var reverseParentheses = function (s) {
  let stack = [];

  for (let b of s) {
    if (b == "(") stack.push(b);
    else if (b == ")") {
      // this can also be done by reversing the string by finding i and j
      let rev = [];
      while (stack.length > 0 && stack[stack.length - 1] != "(") {
        rev.push(stack.pop());
      }
      stack.pop();
      for (let r of rev) stack.push(r);
    } else {
      stack.push(b);
    }
  }

  // console.log(stack);
  return stack.join("");
};

let s = "(ed(et(oc))el)";
console.log(reverseParentheses(s));
