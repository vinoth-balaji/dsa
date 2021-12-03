let a = [2, 5, 9, 3, 1, 12, 6, 8, 7];
let stack = [];
let b = [];
for (let i = a.length - 1; i >= 0; i--) {
  let item = a[i];
  if (stack.length == 0) {
    stack.push(item);
    b.unshift(-1);
  } else {
    while (stack[stack.length - 1] <= item) {
      stack.pop();
    }
    if (stack.length == 0) b.unshift(-1);
    else b.unshift(stack[stack.length - 1]);

    stack.push(item);
  }
}

console.log(b);
