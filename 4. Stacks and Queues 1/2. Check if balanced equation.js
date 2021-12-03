let eq = "(a+b)+((c+d)]";
let stack = [];
let balanced = true;

for (let i = 0; i < eq.length; i++) {
  let ch = eq[i];

  if (ch == "(" || ch == "{" || ch == "[") {
    stack.push(ch);
  } else if (ch == ")" || ch == "}" || ch == "]") {
    if (stack.length == 0) {
      balanced = false;
      break;
    } else if (ch == ")" && stack[stack.length - 1] == "(") stack.pop();
    else if (ch == "}" && stack[stack.length - 1] == "{") stack.pop();
    else if (ch == "]" && stack[stack.length - 1] == "[") stack.pop();
    else {
      balanced = false;
      break;
    }
  }
}
if (stack.length > 0) balanced = false;

console.log(balanced);
