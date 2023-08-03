var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function BinarySearch(array, element) {
  let start = 0;
  end = array.length - 1;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (array[mid] == element) return mid;
    else if (element > array[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

console.log(BinarySearch(a, 90));
