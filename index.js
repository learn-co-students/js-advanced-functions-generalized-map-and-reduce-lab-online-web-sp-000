// Add your functions here
const arr = [1, 2, 3, 4, -5]

function map(arr, func) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i]))
    }
    return result;
}

function reduce(arr, func, value) {
    if (typeof value == 'undefined') {
        if (arr.some(isNaN)) value = true
        else value = 0
    }
    for (let a of arr) {
        value = func(value,a,arr)
    }
    return value
}