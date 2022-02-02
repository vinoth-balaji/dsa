var MovingAverage = function (size) {
  MovingAverage.prototype.queue = [];
  MovingAverage.prototype.size = size;
  MovingAverage.prototype.sum = 0;
};

MovingAverage.prototype.next = function (t) {
  this.queue.push(t);
  this.sum += t;
  if (this.queue.length <= this.size) {
    return this.sum / this.queue.length;
  } else {
    let last = this.queue.shift();
    let avg = (this.sum - last) / this.size;
    this.sum -= last;
    return avg;
  }
};

let ma = new MovingAverage(3);
console.log(ma.next(1));
console.log(ma.next(10));
console.log(ma.next(3));
console.log(ma.next(5));
