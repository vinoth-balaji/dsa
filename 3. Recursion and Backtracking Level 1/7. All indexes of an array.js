let a = [2, 3, 4, 5, 2, 3, 6, 7, 8, 3];

let indexes = [];
function allIndex(a, i, d) {
  if (i == a.length) return -1;
  else if (a[i] == d) {
    indexes.push(i);
  }
  let index = allIndex(a, i + 1, d);
  if (index != -1) {
    indexes.push(index);
    return index;
  } else return -1;
}

allIndex(a, 0, 3);
console.log(indexes);

// function allIndex(a, i, d) {
//   if (i == a.length) return -1;

//   if (a[i] == d) indexes.push(i);

//   allIndex(a, i + 1, d);
// }

// console.log(allIndex(a, 0, 3));
// console.log(indexes);
