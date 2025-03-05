function chosenWine(wines) {
  let arr = wines.sort((a, b) => (a.price > b.price ? 1 : -1));

  return arr.length > 1 ? arr[1].name : arr.length == 1 ? arr[0].name : null;
}

console.log(
  chosenWine([
    { name: "Wine A", price: 8.99 },
    { name: "Wine 32", price: 13.99 },
    { name: "Wine 9", price: 10.99 },
  ])
);

console.log(chosenWine([{ name: "Wine A", price: 8.99 }]));

console.log(chosenWine([]));
