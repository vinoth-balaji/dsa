let a = [1, 8, 6, 2, 5, 4, 8, 3, 7];

let max_capacity = 0;

for (let i = 0, j = a.length - 1; i < j; ) {
  let width = j - i;
  let height = Math.min(a[i], a[j]);
  let capacity = width * height;

  if (capacity > max_capacity) max_capacity = capacity;

  if (a[i] < a[j]) i++;
  else j--;
}
console.log(max_capacity);
