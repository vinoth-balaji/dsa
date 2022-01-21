var arr1 = [1, 2, 3, 4, 7, 9],
  arr2 = [0, 1, 2, 1, 1, 4];

arr2.sort((a, b) => a - b);
let max = 0;
for (let a of arr1) max = Math.max(max, a);

// finding freq of each element from 2nd array
let freq = [];
for (let i = 0; i <= max; i++) freq[i] = 0;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] <= max) freq[arr2[i]]++;
}

// finding prefix sum
sum = 0;
for (let i = 0; i < freq.length; i++) {
  sum += freq[i];
  freq[i] = sum;
}

for (let i = 0; i < arr1.length; i++) {
  arr1[i] = freq[arr1[i]];
}

console.log(arr1);
