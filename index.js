// Add your functions here

function map(array, func) {
    const newArray = []
    array.forEach(element => {
        newArray.push(func(element))
    });

    return newArray
}

function reduce(array, func, start) {
    let current = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1
  
    for (; i < array.length; i++) {
      current = func(array[i], current)
    }
  
    return current;
}
