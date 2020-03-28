// Add your functions here
function map(arr, fn) {
    let arr1 = [];
    for (const a in arr) {
        arr1.push(fn(arr[a]));
    };
    return arr1
};

function reduce(arr, fn, s) {
    let a = !!s ? s : arr[0]
    let i = !!s ? 0 : 1

    for (; i < arr.length; i++) {
        a = fn(arr[i], a)
    }
    return a
};