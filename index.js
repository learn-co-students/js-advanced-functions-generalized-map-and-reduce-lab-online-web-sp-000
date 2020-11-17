function map(array, fn) {
    return array.map(value => fn(value))
}

function reduce(array, fn, start=0) {
    let memo = (!!start) ? start : array[0];
    let i = (!!start) ? 0 : 1;

    for (i; i < array.length; i++) {
        memo = fn(array[i], memo)
    }
    return memo
}
