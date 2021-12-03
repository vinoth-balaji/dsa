let eq = "(a+b)+((c+d))";
let stack = [];
let dup = false;
for (let i = 0; i < eq.length; i++) {
  let ch = eq[i];

  if (ch == ")") {
    if (stack[stack.length - 1] == "(") {
      dup = true;
      break;
    } else {
      while (stack[stack.length - 1] !== "(") {
        stack.pop();
      }
      stack.pop();
    }
  } else {
    stack.push(ch);
  }
}

console.log(dup);
