// Add your functions here
function map(a, fn) {
    let result = []
    a.forEach(e => {
        result.push(fn(e))
    })
    return result
}

function reduce(a, fn, startingPoint = 0) {
    let result = (!!startingPoint) ? startingPoint : a[0]
    let i = (!!startingPoint) ? 0 : 1
    for (; i < a.length; i++) {
        result = fn(a[i], result)
    }
    return result
}

