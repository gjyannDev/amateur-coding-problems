function sortList(obj) {
  return Object.keys(obj)
    .sort()
    .reverse()
    .reduce((acc, curr) => {
      acc[curr] = obj[curr];

      return acc;
    }, {});
}

console.log(sortList({ c: 100, a: 50, b: 10, d: 50 }));
console.log(sortList({ ab: 10, ac: 10, ad: 10 }));
console.log(sortList({ piano: 5, stereo: 10, suitcase: 1 }));
