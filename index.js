// Add your functions here

function map(sourceArray, mappingFunction){
    const returnArray = []
    for (let i=0; i<sourceArray.length; i++){
        returnArray.push(mappingFunction(sourceArray[i]))
    }
    return returnArray
}

function reduce(sourceArray, reducingFunction, memo = undefined) {    
    let returnValue
    if (memo) {
        returnValue = reducingFunction(sourceArray[0], memo)
    }
    else {
        returnValue = sourceArray[0]
    }
    for (let i=1; i<sourceArray.length; i++){
        returnValue = reducingFunction(sourceArray[i], returnValue)
    }
    return returnValue
}
