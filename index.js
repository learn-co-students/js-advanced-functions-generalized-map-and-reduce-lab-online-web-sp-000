function map(array, fn){
	let newArray = []
  	for (let i = 0; i < array.length; i++ ) {
		newArray.push(fn(array[i]))
	}
	return newArray
}

function reduce(array, fn, startingPt=0){
	let value
	if (typeof startingPt === 'number') { value = startingPt}
		let valArray = []
	for (let i = 0; i < array.length; i++){
		value = fn(array[i], value)
	}

	return value
}