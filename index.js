function map(array, fn) {
    let a = []
    for (const element of array) {
        a.push(fn(element));
    }
    return a
}

function reduce(array, fn, start = 0) {
    let subtotal = start
    if (typeof fn(1, true) == "boolean"){
        subtotal = true
    }
    for (const element of array) {
        subtotal = fn(element, subtotal)
    }
    return subtotal
}
