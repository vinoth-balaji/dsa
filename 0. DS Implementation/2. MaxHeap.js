class MaxHeap {
  keyIndex = undefined;
  heap = [];
  constructor(keyIndex) {
    this.heap = [];
    this.keyIndex = keyIndex;
  }

  max_heapify = (i) => {
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    let largest = i;
    let keyIndex = this.keyIndex;

    if (keyIndex != undefined) {
      if (
        l < this.heap.length &&
        this.heap[l][keyIndex] > this.heap[largest][keyIndex]
      )
        largest = l;
      if (
        r < this.heap.length &&
        this.heap[r][keyIndex] > this.heap[largest][keyIndex]
      )
        largest = r;
    } else {
      if (l < this.heap.length && this.heap[l] > this.heap[largest])
        largest = l;
      if (r < this.heap.length && this.heap[r] > this.heap[largest])
        largest = r;
    }

    if (i != largest) {
      [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
      this.max_heapify(largest);
    }
  };

  extract_max = () => {
    let max = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.max_heapify(0);
    return max;
  };

  insert = (val) => {
    this.heap.push(val);
    let i = this.heap.length - 1;

    if (i > 0) {
      for (let i = parseInt(this.heap.length / 2 - 1); i >= 0; i--) {
        this.max_heapify(i);
      }
    }
  };

  top = () => {
    return this.heap[0];
  };

  size = () => {
    return this.heap.length;
  };
}

module.exports = MaxHeap;
