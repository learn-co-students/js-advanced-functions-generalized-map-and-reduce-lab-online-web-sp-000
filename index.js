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
    let x;
    if (startingPoint) {
        memo = startingPoint;
        x = 0;
    } else {
        memo = sourceArray[0];
        x = 1;
    } 
    for (let i = x; i < sourceArray.length; i++) {
        memo = block(sourceArray[i], memo);
    }
    return memo;
}