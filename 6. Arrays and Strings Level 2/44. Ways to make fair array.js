let a = [2, 1, 6, 4];

let os = 0,
  es = 0,
  oe = [];
let ans = 0;
for (let i = 0; i < a.length; i++) {
  if (i % 2 == 0) {
    es += a[i];
  } else {
    os += a[i];
  }

  oe[i] = {
    even: es,
    odd: os,
  };
}

for (let i = 0; i < a.length; i++) {
  let left_odd = 0,
    right_odd = 0,
    left_even = 0,
    right_even = 0,
    last = oe[a.length - 1];

  if (i == 0) {
    right_odd = last["even"] - oe[i]["even"];
    right_even = last["odd"] - oe[i]["odd"];
  } else {
    left_odd = oe[i - 1]["odd"];
    right_odd = last["even"] - oe[i]["even"];

    left_even = oe[i - 1]["even"];
    right_even = last["odd"] - oe[i]["odd"];
  }
  if (left_odd + right_odd == left_even + right_even) ans++;
}

console.log(ans);
