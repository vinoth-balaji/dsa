class MinHeap {
  keyIndex = undefined;
  heap = [];
  constructor(keyIndex) {
    this.heap = [];
    this.keyIndex = keyIndex;
  }

  min_heapify = (i) => {
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    let smallest = i;
    let keyIndex = this.keyIndex;

    if (keyIndex != undefined) {
      if (
        l < this.heap.length &&
        this.heap[l][keyIndex] < this.heap[smallest][keyIndex]
      )
        smallest = l;
      if (
        r < this.heap.length &&
        this.heap[r][keyIndex] < this.heap[smallest][keyIndex]
      )
        smallest = r;
    } else {
      if (l < this.heap.length && this.heap[l] < this.heap[smallest])
        smallest = l;
      if (r < this.heap.length && this.heap[r] < this.heap[smallest])
        smallest = r;
    }

    if (i != smallest) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this.min_heapify(smallest);
    }
  };

  extract_min = () => {
    let min = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.min_heapify(0);
    return min;
  };

  insert = (val) => {
    this.heap.push(val);
    let i = this.heap.length - 1;

    if (i > 0) {
      for (let i = parseInt(this.heap.length / 2 - 1); i >= 0; i--) {
        this.min_heapify(i);
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

module.exports = MinHeap;
