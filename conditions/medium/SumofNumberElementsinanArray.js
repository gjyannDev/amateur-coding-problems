function numbersSum(arr) {
  return arr
    .filter((el) => el === parseInt(el, 10))
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(numbersSum([1, 2, "13", "4", "645"]));
