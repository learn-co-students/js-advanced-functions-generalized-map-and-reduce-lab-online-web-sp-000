// Add your functions here
function map(array, callback) {
    return array.map(callback)
}

function reduce(array, callback, startingPoint=0) {
    if (startingPoint===0) {
      return array.reduce(callback)
    } else {
      return array.reduce(callback, startingPoint)
    }
}