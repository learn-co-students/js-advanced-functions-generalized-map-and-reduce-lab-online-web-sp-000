function map(array, func) {
    return array.map(element => func(element))
}

function reduce(array, func, startingPoint) {
    let v = !!startingPoint ? startingPoint : array[0]
    let i = !!startingPoint ? 0 : 1

    for(; i < array.length; i++){
        v = func(array[i], v)
    }

    return v
}