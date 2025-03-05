function canConcatenate(arr, target) {
  return (
    arr.flat().sort((a, b) => a - b).length == target.length &&
    arr
      .flat()
      .sort((a, b) => a - b)
      .every((el, i) => el === target.sort((a, b) => a - b)[i])
  );
}

console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]));
console.log(
  canConcatenate(
    [
      [2, 1, 3],
      [5, 4, 7, 6],
    ],
    [7, 6, 5, 4, 3, 2, 1]
  )
);
console.log(
  canConcatenate(
    [
      [2, 1, 3],
      [5, 4, 7, 6, 7],
    ],
    [1, 2, 3, 4, 5, 6, 7]
  )
);
console.log(
  canConcatenate(
    [
      [2, 1, 3],
      [5, 4, 7],
    ],
    [1, 2, 3, 4, 5, 6, 7]
  )
);
