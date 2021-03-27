// Add your functions here
function map(array, func){
    const newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(func(array[i]))
    }
    return newArray
}

function reduce(array, func, start=0){
    let total = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1
    // wow cool that was a little bit esoteric
    for(; i < array.length; i++){
        total = func(array[i], total)
    }
    return total
}