// Add your functions here
function map(arr, fun) {
    let i = 0;
    let newArr = [];
    while (i < arr.length) {
        newArr.push(fun(arr[i]));
        i++;
    }
    return newArr
}

function reduce(array, fn, starting) {
    let r = (!!starting) ? starting : array[0]
    let i = (!!starting) ? 0 : 1
    
    for (; i < array.length; i++) {
       r = fn(r, array[i])
    }
    return r
}