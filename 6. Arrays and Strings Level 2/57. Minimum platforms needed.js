let arr = new Array(900, 940, 950, 1100, 1500, 1800);
let dep = new Array(910, 1200, 1120, 1130, 1900, 2000);

let platforms = 0;

arr = arr.sort();
dep = dep.sort();

let i = 1,
  j = 0;

while (i < arr.length && j < dep.length) {
  if (arr[i] <= dep[j]) {
    platforms++;
    i++;
  } else {
    i++;
    j++;
  }
}

console.log(platforms);
