let row = 3;

let pascal_row = [];
let val = 1; // nC0 =1
for (let j = 0; j <= row; j++) {
  pascal_row.push(val);

  // we are doing val * (row-j)  to avoid decimals
  val = (val * (row - j)) / (j + 1);
}

console.log(pascal_row);
