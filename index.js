// Add your functions here

function map(array, func) {
    let retArray = []
    for (const el of array) {
        retArray.push(func(el))
    }
    return retArray
}

function reduce(array, func, startingPoint) {
    
    //debugger
    let agg
    if (startingPoint) {
        agg = startingPoint
     }  
    //else if (array[0]) {
    //     agg = 0
    // } else {
    //     agg = 0
    // }

    for (let i = 0; i < array.length; i++) {
        debugger
        if (typeof agg === "undefined") {
            agg = func(array[1], array[0])
            i++
        } else {
            agg = func(array[i], agg)
        }
        
    }

    return agg
}