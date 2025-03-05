function sumTwoSmallestNums(arr) {
	return arr.filter(num => num > 0).sort((a, b) => a - b).slice(0, 2).reduce((acc, curr) => acc + curr, 0)
}

console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]))
console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]))
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]))