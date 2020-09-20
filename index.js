// Add your functions here
function map(arr, func) {
	let newArray = [];
	for (const element of arr) {
		newArray.push(func(element))
	}
	return newArray;
}

function reduce(arr, func, start = 0) {
	let total = start
	for (let i = 0; i < arr.length; i++) {
		if (isNaN(arr[i])) {
			total = true
		}
		total = func(arr[i], total);
	}
	return total;
}