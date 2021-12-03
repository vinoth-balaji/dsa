class stack {
  s = [];
  m = -1;
  size = 0;

  push(e) {
    if (this.size == 0) {
      this.m = e;
      this.s.push(e);
    } else {
      if (e < this.m) {
        this.s.push(e + (e - this.m));
        this.m = e;
      } else {
        this.s.push(e);
      }
    }

    ++this.size;
  }

  top() {
    return this.s[this.size - 1];
  }

  pop() {
    let e = this.s.pop();
    --this.size;
    if (e < this.m) {
      let val = this.m;
      this.m = 2 * val - e;
      return val;
    }

    return e;
  }

  size() {
    return this.size;
  }

  min() {
    return this.m;
  }

  print() {
    console.log(this.s, this.m);
  }
}

let s = new stack();
s.push(5);
s.push(10);
s.push(3);
s.push(15);
console.log(s.top());
console.log(s.min());
s.pop();
s.pop();
console.log(s.min());
