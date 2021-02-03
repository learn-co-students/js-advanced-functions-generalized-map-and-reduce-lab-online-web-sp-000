// Add your functions here
function map(srcArr, fn){
    let nuArr = []
    for (let i = 0; i < srcArr.length; i++){
        nuArr.push(fn(srcArr[i]))
    }
    return nuArr
}

function reduce(srcArr, fn, start = 0){
    let finalValue = (!!start) ? start : srcArr[0]
    for (let i = (!!start) ? 0 : 1; i < srcArr.length; i++){
        finalValue = fn(srcArr[i], finalValue)
    }
    return finalValue
}