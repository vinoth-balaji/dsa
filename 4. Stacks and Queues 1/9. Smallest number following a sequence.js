let exp = "ddiididd";
let stack = [];
let num = 1;
let ans = "";
for (let i = 0; i < exp.length; i++) {
  let ch = exp[i];

  // if d push
  // if i push and empty stack

  if (ch == "d") {
    stack.push(num++);
  } else {
    stack.push(num++);
    while (stack.length > 0) {
      ans += stack.pop();
    }
  }
}

stack.push(num);
while (stack.length > 0) {
  ans += stack.pop();
}

console.log(ans);
