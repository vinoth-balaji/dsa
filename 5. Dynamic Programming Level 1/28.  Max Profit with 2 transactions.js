let stocks = [
  30, 40, 43, 50, 45, 20, 26, 40, 80, 50, 30, 15, 10, 20, 40, 45, 71, 50, 55,
];

var maxProfit = function (stocks) {
  sellToday = [];
  sellToday[0] = 0;
  min = stocks[0];
  maxProfitIfSoldToday = 0;

  for (let i = 1; i < stocks.length; i++) {
    min = Math.min(min, stocks[i]);
    maxProfitIfSoldToday = Math.max(maxProfitIfSoldToday, stocks[i] - min);
    sellToday[i] = maxProfitIfSoldToday;
  }
  // console.log(sellToday);

  buyToday = [];
  buyToday[stocks.length - 1] = 0;
  max = stocks[stocks.length - 1];
  maxProfitIfBoughtToday = 0;

  for (let i = stocks.length - 1; i >= 0; i--) {
    max = Math.max(max, stocks[i]);
    maxProfitIfBoughtToday = Math.max(maxProfitIfBoughtToday, max - stocks[i]);
    buyToday[i] = maxProfitIfBoughtToday;
  }
  // console.log(buyToday);

  // find max profit
  let maxProfit = 0;
  for (let i = 0; i < stocks.length; i++) {
    let profit = buyToday[i] + sellToday[i];
    if (profit > maxProfit) maxProfit = profit;
  }

  return maxProfit;
};
console.log(maxProfit(stocks));
