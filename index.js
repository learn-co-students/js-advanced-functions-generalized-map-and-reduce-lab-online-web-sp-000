// Add your functions here

function map(src, fn) {
    let r = []

    for (let i = 0; i < src.length; ++i) {
        let theElement = src[i]
        r.push(fn(theElement))
    }
    return r;
}

function reduce(src, fn, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1

    for (; i < src.length; ++i){
        r = fn(src[i], r)
    }
    return r;
}