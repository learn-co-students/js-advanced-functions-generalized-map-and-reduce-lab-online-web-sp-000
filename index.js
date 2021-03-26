// Add your functions here
function map(arr, callb) {
    let r =[]
    for (let i =0; i < arr.length; i++){
        let theIndex = arr[i]
        r.push(callb(theIndex));
    }
    return r
}

function reduce(arr, callb, starting) {
    let r = (!!starting) ? starting : arr[0]
    let i = (!!starting) ? 0 : 1

    for (; i < arr.length; i++) {
        r = callb(arr[i], r)
    }
    return r
}