// Add your functions here


function map(sourceArray, callback) {
    const newArr = sourceArray.map(x => callback(x))
    return newArr
}

function reduce(sourceArray, callback, startingPoint) {
    if (startingPoint) {
        const newTotal = sourceArray.reduce((acc, val) => callback(acc, val), startingPoint)
        return newTotal
    }
    else {
        const newTotal = sourceArray.reduce((acc, val) => callback(acc, val))
        return newTotal
    }
}