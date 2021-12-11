let a = [5, 10, 10, 100, 5];

let p_inc = 0,
  p_exc = 0,
  c_inc = 0,
  c_exc = 0;

p_inc = a[0];
p_exc = 0;

for (let i = 1; i < a.length; i++) {
  c_inc = a[i] + p_exc;
  c_exc = Math.max(p_inc, p_exc);

  p_inc = c_inc;
  p_exc = c_exc;
}

console.log(Math.max(c_inc, c_exc));
