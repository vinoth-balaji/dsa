let a = "000000000";
let t = "001011101";
let flips = 0;

let target = "0";

for (let i = 0; i < t.length; i++) {
  if (target != t[i]) {
    flips++;
    target = target == "0" ? "1" : "0";
  }
}

console.log(flips);

//Normal Approach

// let a = '000000000';
// let t = '001011101';
// let flips = 0;

// let target = a.split('');

// for (let i = 0; i < target.length; i++) {
//   if (target[i] != t[i]) {
//     flips++;
//     flip(target, i);
//   }
// }

// function flip(a, i) {
//   for (i; i < a.length; i++) {
//     a[i] = a[i] == '0' ? '1' : '0';
//   }
// }

// console.log(flips);
