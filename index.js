function map(sourceArray, callback) {
    let newArray = []

    for (let i = 0; i < sourceArray.length; i++) {
        let element = sourceArray[i]
        newArray.push(callback(element))
    }
    return newArray; 
}

function reduce(sourceArray, callback, starting) {
    let a = (!!starting) ? starting : sourceArray[0]
    let i = (!!starting) ? 0 : 1 
    
    for (; i < sourceArray.length; i++){
        a = callback(sourceArray[i], a)
    }
    return a;
}
