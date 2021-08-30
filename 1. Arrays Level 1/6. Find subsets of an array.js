let a = [1, 2, 3];

let limit = Math.pow(2, a.length);

for (let i = 0; i < limit; i++) {
  let temp = i;
  let set = "";

  for (let j = a.length - 1; j >= 0; j--) {
    let r = parseInt(temp % 2);
    temp = parseInt(temp / 2);

    if (r == 0) {
      set = "- \t" + set;
    } else {
      set = a[j] + "\t" + set;
    }
  }
  console.log(set);
}
