function consecutiveCombo(a1, a2) {
	let sortedArr = a1.concat(a2).sort((a,b) => a - b)

  return new Set(sortedArr).size == sortedArr.length && Math.max(...sortedArr) == Math.min(...sortedArr) + sortedArr.length - 1 
}

console.log(consecutiveCombo([7, 4, 5, 1], [2, 3, 6]))
console.log(consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10]))
console.log(consecutiveCombo([44, 46], [45]))