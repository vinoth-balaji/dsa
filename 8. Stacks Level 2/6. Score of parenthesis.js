var scoreOfParentheses = function (s) {
  let score = 0;
  let stack = [];

  for (let b of s) {
    if (b == "(") stack.push(b);
    else {
      if (stack[stack.length - 1] == "(") {
        stack.pop();
        stack.push(1);
      } else {
        let inter = 0;

        while (stack[stack.length - 1] != "(") {
          inter += stack.pop();
        }
        stack.pop();
        stack.push(2 * inter);
      }
    }
  }

  for (let v of stack) score += v;
  return score;
};

let s = "(()())";
console.log(scoreOfParentheses(s));
