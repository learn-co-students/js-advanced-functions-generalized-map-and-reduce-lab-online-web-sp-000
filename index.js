// Add your functions here
function map(arr, func) {
    const newArr = [];

    for(let i = 0; i < arr.length; i++) {        
        const result = func(arr[i]);
        newArr.push(result);
    }
    return newArr
}

function reduce(arr, reducer, sv) {

    let accumulator = !!sv ? sv : arr[0];
    let i = !!sv ? 0 : 1; 
    
    for(; i < arr.length; i++) {
        accumulator = reducer(accumulator, arr[i]);
    }
    return accumulator;
}

// reducer takes an array, reducer() and initialValue as argumentfunction 
// reduce(arr, reducer, initialValue) {    let accumulator = initialValue === undefined ? 0 : initialValue        
// loop though array    for(let i=0;i<arr.length;i++)        accumulator = reducer(accumulator, arr[i], i, arr);    return accumulator;}