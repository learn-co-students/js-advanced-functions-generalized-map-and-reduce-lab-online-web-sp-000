// Add your functions here
function map(src, callBack) {
    let r = []
    for (let i = 0; i < src.length; i++) {
        r.push(callBack(src[i]))
    }
    return r
}

function reduce(src, callBack, startPoint) {
    let total
    let i = 0
    if (!!startPoint) {
        total = startPoint
        i = 0
    } else {
        total = src[0]
        i = 1
    } 
    for (; i < src.length; i++) {
    total = callBack(src[i], total)
    }
    return total
}