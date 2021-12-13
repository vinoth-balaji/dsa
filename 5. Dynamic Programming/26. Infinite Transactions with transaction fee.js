let stocks = [10, 15, 17, 20, 16, 18, 22, 20, 23, 25];
let fee = 3;

let o_bs = -stocks[0];
let o_ss = 0;

for (let i = 1; i < stocks.length; i++) {
  let n_bs = 0,
    n_ss = 0;

  //updating Bought State
  if (o_bs < o_ss - stocks[i]) {
    n_bs = o_ss - stocks[i];
  } else {
    n_bs = o_bs;
  }

  // updating sold state
  if (o_ss > stocks[i] - fee + o_bs) {
    n_ss = o_ss;
  } else {
    n_ss = stocks[i] - fee + o_bs;
  }

  o_ss = n_ss;
  o_bs = n_bs;
}

console.log(o_ss);
