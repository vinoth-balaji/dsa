let a = [2, 5, 9, 3, 1, 12, 6, 8, 7];
let stack = [];
let b = [];
for (let i = 0; i < a.length; i++) {
  let item = a[i];
  if (stack.length == 0) {
    stack.push(i);
    b[i] = 1;
  } else {
    while (a[stack[stack.length - 1]] <= item) {
      stack.pop();
    }
    if (stack.length == 0) {
      stack.push(i);
      b[i] = i + 1;
    } else {
      b[i] = i - stack[stack.length - 1];
    }

    stack.push(i);
  }
}

console.log(b);
