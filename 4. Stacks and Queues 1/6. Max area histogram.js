let a = [6, 2, 5, 4, 5, 1, 6];
let stack = [];
let rb = [];

// finding right boundary
for (let i = a.length - 1; i >= 0; i--) {
  let item = a[i];
  if (stack.length == 0) {
    stack.push(i);
    rb[i] = a.length;
  } else {
    while (a[stack[stack.length - 1]] >= item) {
      stack.pop();
    }
    if (stack.length == 0) {
      stack.push(i);
      rb[i] = a.length;
    } else {
      rb[i] = stack[stack.length - 1];
    }

    stack.push(i);
  }
}

console.log(rb);

stack = [];
let lb = [];

// finding left boundary
for (let i = 0; i < a.length; i++) {
  let item = a[i];
  if (stack.length == 0) {
    stack.push(i);
    lb[i] = -1;
  } else {
    while (a[stack[stack.length - 1]] >= item) {
      stack.pop();
    }
    if (stack.length == 0) {
      lb[i] = -1;
    } else {
      lb[i] = stack[stack.length - 1];
    }

    stack.push(i);
  }
}
console.log(lb);

let maxArea = 0;
for (let i = 0; i < a.length; i++) {
  let dis = rb[i] - lb[i] - 1;
  let area = dis * a[i];
  if (area > maxArea) maxArea = area;
}

console.log(maxArea);
