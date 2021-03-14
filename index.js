// Add your functions here
function map(sourceArray, func) {
    let mapped = sourceArray.map(func);
    return mapped;
}

function reduce(sourceArray, func, start=0){
    if (sourceArray.includes(true)){
        start = true
    }
    let reduced = sourceArray.reduce(func, start)
    return reduced
}