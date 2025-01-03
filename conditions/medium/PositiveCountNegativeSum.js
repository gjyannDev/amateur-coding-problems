function countPosSumNeg(arr) {
  let pos = arr.filter(el => el > 0).reduce((acc, curr) => acc += 1, 0)
  let neg = arr.filter(el => el < 0).reduce((acc, curr) => acc + curr, 0)

  return (arr.length === 0) ? [] : [pos, neg];
}

console.log(countPosSumNeg([]));
