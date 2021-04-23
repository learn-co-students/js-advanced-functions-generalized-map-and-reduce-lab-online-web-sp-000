function map(array, an) {
let r = []

    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        r.push(an(element))
    }
return r
}

function reduce(array, an, optional) {
    let a = (!!optional) ? optional : array[0]
    let b = (!!optional) ? 0 : 1 
    for (; b < array.length; b++ ) {
        a = an(array[b], a)
    }
    return a
}