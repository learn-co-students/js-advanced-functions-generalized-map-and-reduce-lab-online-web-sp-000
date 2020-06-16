// Add your functions here
function map(sourceArray, func) {
    let newArry = []
    for (const el of sourceArray) {
        newArry.push(func(el))
    }
    return newArry
}

function reduce(arr, func, start=0) {
    let total = start;
    for (let i=0; i<arr.length; i++){
        if (isNaN(arr[i])) {
            total = true
        }
        total = func(arr[i], total);
    } return total;
}