// first approach - O(n)

let s = "88432532156";
let a = s.split("");
let rightMax = [];

// findling right max
rightMax[a.length - 1] = a.length - 1;
for (let i = a.length - 2; i >= 0; i--) {
  if (a[i] - "0" > a[rightMax[i + 1]]) {
    rightMax[i] = i;
  } else {
    rightMax[i] = rightMax[i + 1];
  }
}

// find out position to swap and then swap
for (let i = 0; i < a.length; i++) {
  if (a[i] - "0" < a[rightMax[i]] - "0") {
    [a[i], a[rightMax[i]]] = [a[rightMax[i]], a[i]];
    break;
  }
}

console.log(a.join(""));
// ans = 88632532154

// second appraoch Space - O(10)
let s = "88432532156";
let a = s.split("");
let lastIndexMap = [];

// findling last index of each char
for (let i = 0; i < 10; i++) {
  lastIndexMap[i] = 0;
}
for (let i = 0; i < a.length; i++) {
  lastIndexMap[a[i] - "0"] = i;
}

// find out position to swap and then swap
let flag = false;
for (let i = 0; i < a.length; i++) {
  let c = a[i] - "0";
  for (let j = 9; j > c; j--) {
    if (lastIndexMap[j] > i) {
      [a[i], a[lastIndexMap[j]]] = [a[lastIndexMap[j]], a[i]];
      flag = true;
      break;
    }
  }
  if (flag) break;
}

console.log(a.join(""));
