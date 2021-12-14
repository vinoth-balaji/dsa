function fibonacci(v, memoization) {
  if (v == 0 || v == 1) return v;

  if (memoization[v]) return memoization[v];

  let fib = fibonacci(v - 1, memoization) + fibonacci(v - 2, memoization);
  memoization[v] = fib;
  return fib;
}

console.log(fibonacci(10, []));
