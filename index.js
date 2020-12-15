const map = function(sourceArray, callback){
    let newArray = []

    for (let index = 0; index < sourceArray.length; index++) {
        newArray.push(callback(sourceArray[index]))
    }
    return newArray
}

const reduce = function(sourceArray, callback, startingValue) {
    let memo = startingValue ? startingValue : sourceArray[0]

    for (let index = startingValue ? 0 : 1; index < sourceArray.length; index++) {
        memo = callback(sourceArray[index], memo)   
    }
    return memo
}
