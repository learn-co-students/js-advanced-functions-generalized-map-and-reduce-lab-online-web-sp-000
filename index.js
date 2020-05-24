// Add your functions here

function map(array, x) {
    const result = []
    for (let a of array) {
        result.push(x(a))
    }
    return result
}

function reduce(array, x, value) {
    if (typeof value == 'undefined') {
        if (array.some(isNaN)) value = true 
        else value = 0
    }
    for (let a of array) {
        value = x(value,a,array)
    }
    return value
}