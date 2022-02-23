var FreqStack = function () {
  FreqStack.prototype.maxFreq = 0;
  FreqStack.prototype.hashStack = {};
  FreqStack.prototype.freq = {};
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  if (this.freq.hasOwnProperty(val)) {
    this.freq[val] += 1;
  } else {
    this.freq[val] = 1;
  }
  this.maxFreq = Math.max(this.maxFreq, this.freq[val]);

  if (this.hashStack.hasOwnProperty(this.freq[val])) {
    this.hashStack[this.freq[val]].push(val);
  } else {
    this.hashStack[this.freq[val]] = [val];
  }

  // console.log(this.hashStack);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  let top = 0;
  // console.log(top, this.hashStack, this.maxFreq);
  if (this.hashStack[this.maxFreq].length > 0) {
    top = this.hashStack[this.maxFreq].pop();
    this.freq[top] -= 1;
  }
  if (this.hashStack[this.maxFreq].length == 0) this.maxFreq -= 1;
  // console.log(top);
  return top;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */

let freqStack = new FreqStack();
freqStack.push(5); // The stack is [5]
freqStack.push(7); // The stack is [5,7]
freqStack.push(5); // The stack is [5,7,5]
freqStack.push(7); // The stack is [5,7,5,7]
freqStack.push(4); // The stack is [5,7,5,7,4]
freqStack.push(5); // The stack is [5,7,5,7,4,5]
freqStack.pop(); // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
freqStack.pop(); // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
freqStack.pop(); // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
freqStack.pop(); // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].
