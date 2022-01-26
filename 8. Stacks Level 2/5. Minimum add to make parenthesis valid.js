var minAddToMakeValid = function (s) {
  let count = 0;
  let stack = [];

  for (let b of s) {
    if (b == "(") stack.push(b);
    else {
      if (stack.length > 0 && stack[stack.length - 1] == "(") stack.pop();
      else count++;
    }
  }

  // console.log(stack);
  return count + stack.length;
};

let s = "((())(";
console.log(minAddToMakeValid(s));
