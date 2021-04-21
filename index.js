// Add your functions here
function map(array, f) {
    let newArray = [] 
    for (let i=0; i<array.length; i++) {
        let e = array[i]
        newArray.push(f(e))
    }
    return newArray
}

function reduce(array, f, sp=0) {
    let value = (!!sp) ? sp : array[0]
    let i = (!!sp) ? 0 : 1

    for (; i<array.length; i++) {
        value = f(array[i], value)
    }
    return value;
}

