let stocks = [10, 15, 17, 20, 16, 18, 22, 20, 22, 20, 23, 25];

let o_bs = -stocks[0];
let o_ss = 0;
let o_cs = 0;

for (let i = 1; i < stocks.length; i++) {
  let n_bs = 0,
    n_ss = 0,
    n_cs = 0;

  //updating Bought State
  // we are using previous cold state as 1 day coolling period is required before buying
  if (o_bs < o_cs - stocks[i]) {
    n_bs = o_cs - stocks[i];
  } else {
    n_bs = o_bs;
  }

  // updating sold state
  if (o_ss > stocks[i] + o_bs) {
    n_ss = o_ss;
  } else {
    n_ss = stocks[i] + o_bs;
  }

  // updating cold state
  if (o_cs > o_ss) {
    n_cs = o_cs;
  } else {
    n_cs = o_ss;
  }

  o_ss = n_ss;
  o_bs = n_bs;
  o_cs = n_cs;
}

console.log(o_ss);
