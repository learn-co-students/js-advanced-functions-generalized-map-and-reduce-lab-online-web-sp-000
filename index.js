// Add your functions here
// function map(src, fn) {
//     return src.map(x => fn(x));
// }

function map(src, fn) {
    let r = []

    for (let i = 0; i < src.length; i++) {
        r.push(fn(src[i]));
    }

    return r;
}

// function reduce(src, fn, startingValue = 0) {
//     return src.reduce(fn, startingValue);
// }

function reduce(src, fn, starting = 0) {
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1

    for (; i < src.length; i++ ) {
        r = fn(src[i], r)
    }

    return r;
}