var a = [10, 20, 20, 30, 30, 30, 30, 80, 90, 100];

function BinarySearchIndex(array, element) {
  let start = 0,
    end = array.length - 1;

  let startIndex = -1;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (array[mid] == element) {
      startIndex = mid;
      end = mid - 1;
    } else if (element > array[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return startIndex;
}

console.log(BinarySearchIndex(a, 30));
