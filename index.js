// Add your functions here

function map(src, callback) {
    let r = []
    for (let i = 0; i < src.length; i++) {
        let var1 = src[i]
        r.push(callback(var1))
    }
    return r;
}

function reduce(src, callback, start) {
    let r = (!!start) ? start : src[0]
    let i = (!!start) ? 0 : 1

    for (; i < src.length; i++) {
        r = callback(src[i], r)
    }
    return  r;
}