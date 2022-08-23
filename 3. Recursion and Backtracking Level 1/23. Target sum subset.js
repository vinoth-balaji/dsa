function targetSum(arr, target, set, index, sum) {
  if (index == arr.length) {
    if (sum == target) {
      console.log(set);
    }
    return;
  }

  targetSum(arr, target, set + " " + arr[index], index + 1, sum + arr[index]);
  targetSum(arr, target, set, index + 1, sum);
}

a = [10, 20, 30, 40, 50];
target = 70;
targetSum(a, target, "", 0, 0);
