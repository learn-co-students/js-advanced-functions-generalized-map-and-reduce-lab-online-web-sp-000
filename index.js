// Add your functions here

function map(arr, value) {
    let a = []

    for (let i = 0; i < arr.length; i++) {
        let ans = arr[i]
        a.push(value(ans))
    }

    return a;
}


function reduce(arr, value, startingPoint) {
    let a = (!!startingPoint) ? startingPoint : arr[0]
    let b = (!!startingPoint) ? 0 : 1 
    

    for (; b < arr.length; b++) {
        a = value(arr[b], a)
    }

    return a;
}