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

var nestedObject = {
  data: {
    num: 2,  
      info: {
          stuff: {
              thing: {
                  moreStuff: {
                      magicNumber: 44,
                      something: 'foo2'
                  }
              }
          }
      }
  }
}

function contains(obj, value) {
  for (const [key, val] of Object.entries(obj)) {
    if (Object.values(val).includes(value)) {
      return true
    } else {
      if (val && typeof val === 'object') {
        if (contains(val, value)) {
          return true;
        }
      }
    }

    return false;
  }
}
