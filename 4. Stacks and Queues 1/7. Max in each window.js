let a = [6, 2, 5, 4, 5, 1, 6];
let stack = [];
let b = [];

// finding nger
stack.push(a.length - 1);
b[a.length - 1] = a.length;
for (let i = a.length - 2; i >= 0; i--) {
  while (stack.length > 0 && a[stack[stack.length - 1]] <= a[i]) {
    stack.pop();
  }
  if (stack.length == 0) {
    b[i] = a.length;
  } else {
    b[i] = stack[stack.length - 1];
  }

  stack.push(i);
}
console.log(b);

let j = 0;
let k = 2;
let sw = [];
for (let i = 0; i <= a.length - k; i++) {
  if (j < i) j = i;

  while (b[j] < i + k) {
    j = b[j];
  }

  sw.push(a[j]);
}
console.log(sw);
