let n = 5;
let k = 3;
let same = 0,
  diff = 0;

// for i=0
same = k;
diff = k;

// for i=1
same = k * 1;
diff = k * (k - 1);
total = same + diff;

for (let i = 2; i < n; i++) {
  same = diff * 1;
  diff = total * (k - 1);

  total = same + diff;
}

console.log(same + diff);
