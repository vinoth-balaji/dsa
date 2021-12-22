let a = [3, 4, -1, 1];
let one = false;

for (let i = 0; i < a.length; i++) {
  if (a[i] == 1) one = true;

  if (a[i] < 0 || a[i] > a.length) a[i] = 1;
}

console.log(a);

if (!one) console.log("1");
else {
  for (let i = 0; i < a.length; i++) {
    let idx = Math.abs(a[i]);
    a[idx - 1] = -Math.abs(a[idx - 1]);
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      console.log(i + 1);
      break;
    }
  }

  // console.log(' Else ', a.length + 1);
}
