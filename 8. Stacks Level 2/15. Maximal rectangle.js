maximalRectangle = function (matrix) {
  let row = [];

  for (let j = 0; j < matrix[0].length; j++) {
    row[j] = +matrix[0][j];
  }
  let maxArea = 0;
  let area = largestRectangleArea(row);
  maxArea = area;

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == "1") {
        row[j] += +matrix[i][j];
      } else {
        row[j] = +matrix[i][j];
      }
    }
    // console.log(row);

    area = largestRectangleArea(row);
    maxArea = Math.max(area, maxArea);
  }

  return maxArea;
};

var largestRectangleArea = function (a) {
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

  // console.log(rb);

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
        stack.push(i);
        lb[i] = -1;
      } else {
        lb[i] = stack[stack.length - 1];
      }

      stack.push(i);
    }
  }
  // console.log(lb);

  let maxArea = 0;
  for (let i = 0; i < a.length; i++) {
    let dis = rb[i] - lb[i] - 1;
    let area = dis * a[i];
    if (area > maxArea) maxArea = area;
  }

  return maxArea;
};

let matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];

console.log(maximalRectangle(matrix));
