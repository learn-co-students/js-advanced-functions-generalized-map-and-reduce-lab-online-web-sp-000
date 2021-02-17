function map(array, fn){
	let newArray = []
  	for (let i = 0; i < array.length; i++ ) {
		newArray.push(fn(array[i]))
	}
	return newArray
}

function reduce(array, fn, startingNum){
	let s = (!!startingNum) ? startingNum : array[0]
	let i = (!!startingNum) ? 0 : 1
	
	for (; i < array.length; i++){
		s = fn(array[i], s)
	}

	return s
}