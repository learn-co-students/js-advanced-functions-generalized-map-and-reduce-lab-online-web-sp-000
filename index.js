function map(srcArray, yourFunction){
    let result = []
    for (let i = 0; i < srcArray.length; i++) {
        result.push(yourFunction(srcArray[i]))
    }
    return result
}

function reduce(srcArray, yourFunction, startingPoint){
    let result = (!!startingPoint) ? startingPoint : srcArray[0]
    let i = (!!startingPoint) ? 0 : 1
    for ( ; i < srcArray.length; i++) {
        result = yourFunction(srcArray[i], result)
      }
    
    return result;
}