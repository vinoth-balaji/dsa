var maxChunksToSorted = function (arr) {
  let chunks = 0;
  let rightMin = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i == arr.length - 1) rightMin[i] = arr[i];
    else rightMin[i] = Math.min(arr[i], rightMin[i + 1]);
  }

  let leftMax = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > leftMax) leftMax = arr[i];

    if (i == arr.length - 1 && arr[i] <= leftMax) chunks++;
    else if (leftMax <= rightMin[i + 1]) {
      chunks++;
    }
  }

  return chunks > 0 ? chunks : 1;
};
let arr = [1, 0, 3, 2, 1];
console.log(maxChunksToSorted(arr));
