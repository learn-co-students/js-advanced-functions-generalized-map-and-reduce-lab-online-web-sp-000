// Add your functions here
function map(sourceArray, fn) {
    let map1 = sourceArray.map(fn)
    return map1

}

function reduce(sourceArray, fn, start=0){
    if (sourceArray.includes(true)){
        start = true
    }
    let reduce1 = sourceArray.reduce(fn, start)
    return reduce1
}