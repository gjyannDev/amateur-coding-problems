function sumTo(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumTo(n - 1);
  }
}

function pow(n, x) {
  if (n === 0) {
    return 1;
  } else {
    return x * pow(n - 1, x);
  }
}

function fact(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

function prodOfArr(arr) {
  let prod = 0;
  for (let i = 0; i <= arr.length; ++i) {
    prod += i;
  }

  return prod;
}
