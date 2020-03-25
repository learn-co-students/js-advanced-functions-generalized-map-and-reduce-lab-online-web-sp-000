function map(array, fn) {
    let newArray = []
    for(let i=0; i < array.length; i++) {
        newArray.push(fn(array[i]))
    }
    return newArray
}

function reduce(array, fn, starting) {
    let sum
    let i
    if(!!starting) {
         sum = starting
         i = 0
    } else { 
         sum = array[0]
         i = 1
    }
    // let r = (!!starting) ? starting : array[0]
    // let i = (!!starting) ? 0 : 1
    
    for (; i < array.length; i++) {
       r = fn(r, array[i])
    }
    return r
}