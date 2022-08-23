var maxChunksToSorted = function (arr) {
  let chunks = 0;
  let rightMin = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i == arr.length - 1) rightMin[i] = arr[i];
    else rightMin[i] = Math.min(arr[i], rightMin[i + 1]);
  }

  let leftMax = arr[0];
  for (let i = 0; i < arr.length; i++) {
    leftMax = Math.max(leftMax, arr[i]);

    if (leftMax <= rightMin[i + 1]) {
      chunks++;
    }
  }

  chunks++;

  return chunks;
};
// let arr = [30, 10, 20, 40, 60, 50, 75, 70];
let arr = [1, 0, 3, 2, 1];
console.log(maxChunksToSorted(arr));
