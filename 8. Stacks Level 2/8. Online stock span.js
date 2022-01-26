var StockSpanner = function () {
  StockSpanner.prototype.size = 0;
  StockSpanner.prototype.stack = [];
};
StockSpanner.prototype.next = function (price) {
  this.size++;
  let ans = 1;

  if (this.stack.length == 0) {
    this.stack.push([price, this.size]);
    ans = 1;
  } else {
    if (this.stack.length == 0) {
      ans = 1;
    } else {
      while (
        this.stack.length > 0 &&
        this.stack[this.stack.length - 1][0] <= price
      ) {
        this.stack.pop();
      }
      if (this.stack.length == 0) ans = this.size;
      else {
        ans = this.size - this.stack[this.stack.length - 1][1];
      }
    }
    this.stack.push([price, this.size]);
  }
  return ans;
};

let stockSpanner = new StockSpanner();
console.log(stockSpanner.next(45)); // return 1
console.log(stockSpanner.next(70)); // return 1
console.log(stockSpanner.next(48)); // return 1
console.log(stockSpanner.next(59)); // return 2
console.log(stockSpanner.next(79)); // return 1
