function indexMultiplier(arr) {
	return arr.map((num, index) => num * index).reduce((acc, curr) => acc + curr, 0)
}

console.log(indexMultiplier([1, 2, 3, 4, 5]))
console.log(indexMultiplier([-3, 0, 8, -6]))