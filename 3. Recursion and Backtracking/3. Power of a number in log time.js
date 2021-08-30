function pow(x, n) {
  if (n == 0) return 1;

  let npnb2 = pow(x, parseInt(n / 2));
  let xn = npnb2 * npnb2;

  if (n % 2 == 1) return xn * x;

  return xn;
}

console.log(pow(2, 5));
