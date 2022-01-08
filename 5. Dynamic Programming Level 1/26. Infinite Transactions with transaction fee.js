let stocks = [10, 15, 17, 20, 16, 18, 22, 20, 23, 25];
let fee = 3;

var maxProfit = function (stocks, fee) {
  let o_bs = -stocks[0];
  let o_ss = 0;

  for (let i = 1; i < stocks.length; i++) {
    n_bs = Math.max(o_bs, o_ss - stocks[i]);
    n_ss = Math.max(o_ss, o_bs + stocks[i] - fee);

    o_bs = n_bs;
    o_ss = n_ss;
  }

  return o_ss;
};
console.log(maxProfit(stocks, fee));
