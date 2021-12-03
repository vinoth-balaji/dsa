let a = [2, 5, 9, 3, 1, 12, 6, 8, 7];
let stack = [];
let b = [];
for (let i = 0; i < a.length; i++) {
  let item = a[i];
  if (stack.length == 0) {
    stack.push(i);
  } else {
    while (a[stack[stack.length - 1]] <= item) {
      let pop = stack.pop();
      b[pop] = item;
    }
    stack.push(i);
  }
}

while (stack.length > 0) {
  let pop = stack.pop();
  b[pop] = -1;
}

console.log(b);
// ans [5, 9, 12, 12, 12, -1, 8, -1, -1]
