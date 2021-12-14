let a = [1, 2, 1, 3, 1, 4, 1];
let val = a[0],
  count = 1;

for (let i = 1; i < a.length; i++) {
  if (a[i] == val) count++;
  else count--;

  if (count == 0) {
    val = a[i];
    count = 1;
  }
}

val_freq = 0;
for (let i = 0; i < a.length; i++) {
  if (val == a[i]) val_freq++;
}

if (val_freq > +(a.length / 2)) console.log(val);
else console.log("Majority Element not found");
