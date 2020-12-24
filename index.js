// Add your functions here
function map(arr, func) {
    let r = []; 
    for (let i=0; i<arr.length; i++) {
        r.push(func(arr[i])); 
    }
    return r; 
}

function reduce(arr, func, startingValue) {
    let r = arr[0];
    let i = 1; 
    if (!!startingValue) {
        r = startingValue;
        i = 0; 
    } 
    for (;i<arr.length; i++) {
        r = func(arr[i], r); 
    }
    return r; 
}