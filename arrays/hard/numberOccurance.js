function countNumberOfOccurrences(obj) {
  return Object.values(obj).reduce((acc, curr) => {
    acc[curr] = Object.values(obj).filter((el) => el === curr).length;

    return acc;
  }, {});
}

console.log(
  countNumberOfOccurrences({
    a: "moron",
    b: "scumbag",
    c: "moron",
    d: "idiot",
    e: "idiot",
  })
);
console.log(
  countNumberOfOccurrences({
    a: "moron",
    b: "moron",
    c: "moron",
  })
);
console.log(
  countNumberOfOccurrences({
    a: "idiot",
    b: "scumbag",
  })
);
