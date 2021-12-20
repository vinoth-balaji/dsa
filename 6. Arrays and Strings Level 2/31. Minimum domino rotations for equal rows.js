let top = [2, 1, 2, 4, 2, 2];
let bottom = [5, 2, 6, 2, 3, 2];

let num1 = top[0],
  num2 = bottom[0];

let count1 = 0,
  count2 = 0,
  count3 = 0,
  count4 = 0;

for (let i = 0; i < top.length; i++) {
  // possibility 1 - making top == num1
  if (count1 != Number.POSITIVE_INFINITY) {
    if (num1 == top[i]) {
    } else if (num1 == bottom[i]) {
      // can be swapped
      count1++;
    } else {
      count1 = Number.POSITIVE_INFINITY;
    }
  }
  // possibility 2 - making bottom == num1
  if (count2 != Number.POSITIVE_INFINITY) {
    if (num1 == top[i]) {
      count2++;
    } else if (num1 == bottom[i]) {
    } else {
      count2 = Number.POSITIVE_INFINITY;
    }
  }
  // possibility 2 - making top == num2
  if (count3 != Number.POSITIVE_INFINITY) {
    if (num2 == top[i]) {
    } else if (num2 == bottom[i]) {
      // can be swapped
      count3++;
    } else {
      count3 = Number.POSITIVE_INFINITY;
    }
  }
  // possibility 4 - making bottom == num2
  if (count4 != Number.POSITIVE_INFINITY) {
    if (num2 == top[i]) {
      count4++;
    } else if (num2 == bottom[i]) {
    } else {
      count4 = Number.POSITIVE_INFINITY;
    }
  }
}

console.log(Math.min(count1, count2, count3, count4));
