// Add your functions here
function map(array, block){
    let newArray = [];
    for (let i = 0; i< array.length; i++){
        newArray.push(block(array[i]));
    };
    return newArray;
}

function reduce(array, block, start){
    let v= (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1
    for (; i< array.length; i++){
        v = block(array[i], v)
    };
    return v;
}