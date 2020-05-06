// Add your functions here
//MAP
function mapToNegativize(int) {
	return -int
}

function mapToNoChange(int) {
	return int
}

function mapToDouble(int) {
	return int * 2
}

function mapToSquare(int) {
	return int ** 2
}

function map(array, mapFunc) {
	const newArray = []
	for (let item of array) {
		newArray.push(mapFunc(item));
	}
	return newArray
}


//REDUCE
function reduceToTotal(array, startPoint=0) {
	let total = startPoint;
	for (let item of array) {
		total += item;
	}
	return total;
}

function reduce(array, func, startPoint){
    let memo;
    let i;

    if (!!startPoint) {
        memo = startPoint;
        i = 0;
    } else {
        memo = func(array[0],array[1]);
        i = 2;
    }
    for (i; i < array.length; i++) {
        memo = func(memo, array[i])
    }
    return memo;
}





