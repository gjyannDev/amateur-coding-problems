function getTotalPrice(groceries) {
  return Number(parseFloat(groceries.map(el => el.price * el.quantity).reduce((acc, curr) => acc += curr, 0)).toFixed(1))
}

console.log(getTotalPrice([{ product: "Milk", quantity: 1, price: 1.5 }]));
console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Cereals", quantity: 1, price: 2.5 },
  ])
);
console.log(getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
]))
console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 },
  ])
);
console.log(
  getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.1 },
    { product: "Lollipop", quantity: 1, price: 0.2 },
  ])
);
