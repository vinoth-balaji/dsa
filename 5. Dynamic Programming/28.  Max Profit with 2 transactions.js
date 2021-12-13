let stocks = [
  30, 40, 43, 50, 45, 20, 26, 40, 80, 50, 30, 15, 10, 20, 40, 45, 71, 50, 55,
];

// 0-n loop : if stocks were supposed to be sold today, find max profit till now

let minTillNow = stocks[0];
let maxProfit_left = 0;
let dp_left = [];

for (let i = 0; i < stocks.length; i++) {
  let cp = stocks[i];

  if (cp < minTillNow) minTillNow = cp;

  let profitIfSoldToday = cp - minTillNow;

  if (profitIfSoldToday > maxProfit_left) maxProfit_left = profitIfSoldToday;
  dp_left[i] = maxProfit_left;
}

// n to 0 loop :if stocks were supposed to be bought today, find max profit
let maxTillNow = stocks[stocks.length - 1];
let maxProfit_right = 0;
let dp_right = [];

for (let i = stocks.length - 1; i >= 0; i--) {
  let cp = stocks[i];

  if (cp > maxTillNow) maxTillNow = cp;

  let profitIfBoughtToday = maxTillNow - cp;

  if (profitIfBoughtToday > maxProfit_right)
    maxProfit_right = profitIfBoughtToday;
  dp_right[i] = maxProfit_right;
}

// find max profit
let maxProfit = 0;
for (let i = 0; i < stocks.length; i++) {
  let profit = dp_right[i] + dp_left[i];
  if (profit > maxProfit) maxProfit = profit;
}
console.log(maxProfit);
