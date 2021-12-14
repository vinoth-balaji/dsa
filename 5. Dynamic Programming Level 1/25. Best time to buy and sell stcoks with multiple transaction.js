let stocks = [11, 6, 7, 19, 4, 1, 6, 18, 4, 20];

let buy = 0,
  sell = 0,
  profit = 0;

for (let i = 1; i < stocks.length; i++) {
  let cp = stocks[i];
  let pp = stocks[i - 1];

  // if price is increasing
  if (cp > pp) {
    sell++;
  } else {
    profit += stocks[sell] - stocks[buy];

    buy = i;
    sell = i;
  }
}

// to handle if there was a peak when ended
profit += stocks[sell] - stocks[buy];

console.log(profit);

// this same logic can be used for previous problem also without transaction fee
