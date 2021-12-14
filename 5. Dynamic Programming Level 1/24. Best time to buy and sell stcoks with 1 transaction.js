let stocks = [11, 6, 7, 19, 4, 1, 6, 18, 4];

let minTillNow = Number.POSITIVE_INFINITY;
let maxProfit = 0;
let profitIfSoldToday = 0;

for (let i = 0; i < stocks.length; i++) {
  let cp = stocks[i];

  if (cp < minTillNow) minTillNow = cp;

  profitIfSoldToday = cp - minTillNow;

  if (profitIfSoldToday > maxProfit) maxProfit = profitIfSoldToday;
}

console.log(maxProfit);
