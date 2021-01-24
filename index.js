// Add your functions here
function map (arr, func){
    const result = []
    for (let element of arr) {
        result.push(func(element))
    }
    return result
}

function reduce (arr, func, start){
    if (!!start===false){
        start = arr.shift()
    }
    return arr.reduce(func, start)
}