// Add your functions here
const sourceArray = [1,2,3,4,5]

function map(sourceArray, newFunction) {
    const result = []
    for (let a of sourceArray) {
        result.push(newFunction(a))
    }
    return result
}

function reduce(sourceArray, newFunction, value) {
    if (typeof value == 'undefined') {
        if (sourceArray.some(isNaN)) value = true
        else value = 0
    }
    for (let a of sourceArray) {
        value = newFunction(value,a,sourceArray)
    }
    return value
}