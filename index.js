// Add your functions here
function map(val, cb) {
    let a = []
    for (let i = 0; i < val.length; i++) {
        let theElement = val[i]
        a.push (cb(theElement))
    }
    return a
}

function reduce(val, cb, startingPoint) {
    let a = (!!startingPoint) ? startingPoint : val[0]
    let i = (!!startingPoint) ? 0 : 1
    for (; i < val.length; i++) {
        a = cb(val[i], a)
    }
    return a
}
