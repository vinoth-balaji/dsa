let a = [1, 2, 1, 3, 2, 2, 1];
let val1 = a[0],
  val2 = a[0],
  count1 = 1,
  count2 = 0;

for (let i = 1; i < a.length; i++) {
  if (a[i] == val1) count1++;
  else if (a[i] == val2) count2++;
  else {
    if (count1 == 0) {
      val1 = a[i];
      count1 = 1;
    } else if (count2 == 0) {
      val2 = a[i];
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }
}

val1_freq = 0;
val2_freq = 0;
for (let i = 0; i < a.length; i++) {
  if (val1 == a[i]) val1_freq++;
  if (val2 == a[i]) val2_freq++;
}

if (val1_freq > +(a.length / 3)) console.log(val1);
if (val2_freq > +(a.length / 3)) console.log(val2);
if (val1_freq <= +(a.length / 3) && val2_freq <= +(a.length / 3))
  console.log("Majority Element not found");
