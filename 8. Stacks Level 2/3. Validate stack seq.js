var validateStackSequences = function (pushed, popped) {
  let i = 0;
  let stack = [];

  for (let j = 0; j < pushed.length; j++) {
    stack.push(pushed[j]);

    if (popped[i] == pushed[j]) {
      while (stack.length > 0 && stack[stack.length - 1] == popped[i]) {
        stack.pop();
        i++;
      }
    }
  }

  return stack.length == 0;
};

let pushed = [1, 2, 3, 4, 5],
  popped = [4, 5, 3, 2, 1];

console.log(validateStackSequences(pushed, popped));
