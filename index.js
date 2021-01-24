// Add your functions here


function map(sourceArray, fn) {
    let result = []
    for (const e of sourceArray) {
        result.push(fn(e));
    }
    return result;
}

function reduce(sourceArray, fn, startingValue) {

let result = !!startingValue ? startingValue : sourceArray[0]
let i = !!startingValue ? 0 : 1

for (; i < sourceArray.length; i++) {

    const e = sourceArray[i];
    result = fn(e, result)
    
}
return result;
}