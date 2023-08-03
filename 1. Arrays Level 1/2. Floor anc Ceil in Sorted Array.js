var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function BinarySearchFC(array, element) {
  let start = 0;
  end = array.length - 1;
  let floor = Number.NEGATIVE_INFINITY;
  let ceil = Number.POSITIVE_INFINITY;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (array[mid] == element) {
      floor = array[mid];
      ceil = array[mid];
      return [floor, ceil];
    } else if (element > array[mid]) {
      floor = array[mid];
      start = mid + 1;
    } else {
      ceil = array[mid];
      end = mid - 1;
    }
  }

  return [floor, ceil];
}

console.log(BinarySearchFC(a, 35));
