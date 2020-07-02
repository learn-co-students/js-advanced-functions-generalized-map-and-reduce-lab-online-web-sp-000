// Add your functions here

function map(array, fn) {
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(fn(array[i]))
    }
    return newArray
}

function reduce(array,fn, s) {
    let value = (!!s) ? s : array[0]
    let i = (!!s) ? 0 : 1
    for (; i < array.length; i++){
        value = fn(array[i], value)
    }
    return value
}