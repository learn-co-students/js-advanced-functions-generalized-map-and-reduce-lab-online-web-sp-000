// Add your functions here

function map(array, block) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(block(array[i]));
    }
    return newArray;
}

function reduce(sourceArray, block, startingPoint) {
    let memo;
    let i;
    if (startingPoint) {
        memo = startingPoint;
        i = 0;
    } else {
        memo = sourceArray[0];
        i = 1;
    } 
    for (; i < sourceArray.length; i++) {
        memo = block(sourceArray[i], memo);
    }
    return memo;
}