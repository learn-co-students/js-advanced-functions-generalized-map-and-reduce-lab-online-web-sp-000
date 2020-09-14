// Add your functions here
function map(arr, func) {
	let r = []
	for (let i = 0; i < arr.length; i++) {
		r.push(func(arr[i]))
	}
	return r
}

function reduce(arr, func, start) {
	let r = (!!start) ? start : arr[0]
	let i = (!!start) ? 0 : 1
	for (; i < arr.length; i++) {
		r = func(r, arr[i])
	}
	return r
}
