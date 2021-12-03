class stack {
  s = [];
  m = [];
  size = 0;

  push(e) {
    this.s.push(e);

    if (this.m.length == 0) {
      this.m.push(e);
    } else {
      let t = this.m[this.m.length - 1];
      if (e < t) {
        this.m.push(e);
      }
    }

    ++this.size;
  }

  top() {
    return this.s[this.size - 1];
  }

  pop() {
    let e = this.s.pop();
    let t = this.m[this.m.length - 1];
    if (e == t) {
      this.m.pop();
    }
    --this.size;
  }

  size() {
    return this.size;
  }

  min() {
    return this.m[this.m.length - 1];
  }
}

let s = new stack();
s.push(5);
s.push(10);
s.push(3);
s.push(15);
console.log(s.top());
console.log(s.min());
