function map(array, fn) {
    let newArray = []
    for(let i=0; i < array.length; i++) {
        newArray.push(fn(array[i]))
    }
    return newArray
}

function reduce(array, fn, starting) {
    // if(!!starting) {
    //     let sum = starting
    //     let i = 0
    // } else { 
    //     let sum = array[0]
    //     let i = 1
    // }
    let r = (!!starting) ? starting : array[0]
    let i = (!!starting) ? 0 : 1
    //TERNARY is the only way for these to work scope-wise
    
    for (; i < array.length; i++) {
       r = fn(r, array[i])
    }
    return r
}