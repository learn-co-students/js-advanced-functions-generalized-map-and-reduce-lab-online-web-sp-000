function map(sourceArray, callback) {
    let r = []

    for (let i = 0; i < sourceArray.length; i++) {
        let theElement = sourceArray[i]
        r.push(callback(theElement))
    }

    return r;
}

function reduce(sourceArray, callback, startingValue) {
    let r = (!!startingValue) ? startingValue : sourceArray[0]
    let i = (!!startingValue) ? 0 : 1

    for (; i < sourceArray.length; i++) {
        r = callback(sourceArray[i], r)
    }

    return r;
}
