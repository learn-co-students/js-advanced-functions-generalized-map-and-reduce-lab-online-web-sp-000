// Add your functions here

function map(sourceArray, workFunction) {
    let newArray = []

    sourceArray.forEach(ting => {
        newArray.push(workFunction(ting))
    })
    return newArray;
}

function reduce(sourceArray, workFunction, start = 0) {
    let runningTotal = start
    for (let element of sourceArray) {
        runningTotal = workFunction(element, runningTotal)
    }
    return runningTotal;
}