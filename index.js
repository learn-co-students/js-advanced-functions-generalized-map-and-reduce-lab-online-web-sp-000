// Add your functions here

// function map (array, method) {
//     const array1 = array.map(x => method(x))
//     return array1
// }

function map (array, method) {
    const array1 = []
    for (var i = 0; i < array.length; i++) {
        array1.push(method(array[i]))
    }
    return array1
}

function reduce(array, method, startingPoint) {
    let runningTotal
    let i
    if (startingPoint) {
        runningTotal = startingPoint
        i = 0
    } else {
        runningTotal = array[0]
        i = 1
    }
    for (; i < array.length; i++) {
        runningTotal = method(runningTotal, array[i])
    }
    return runningTotal
}