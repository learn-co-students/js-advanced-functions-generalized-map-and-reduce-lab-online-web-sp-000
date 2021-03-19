// map handles loops, functions = mapToDouble, mapToSquare, etc
function map(sourceArray, func) {
    let returnValue = sourceArray.map(func)
    return returnValue
}

function reduce(sourceArray, func, startingPoint=0) {
    let returnValue;

    // if there's a starting point, execute the following block, passing in the function & starting point as arguments
    if (!!startingPoint) { 
        returnValue = sourceArray.reduce(func, startingPoint)
    } else { // else, execute following block, only passing in function as argument
        returnValue = sourceArray.reduce(func)
    }
    return returnValue 
}