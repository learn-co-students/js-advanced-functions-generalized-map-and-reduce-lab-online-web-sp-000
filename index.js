// Add your functions here
function map(array, callback) {
    let arrayTwo = [];
    for (let i = 0; i < array.length, i++) {
        let element = array[i];
        arrayTwo.push(callback(element));
    }
    return arrayTwo;
}

function reduce(array, callback, startingPoint) {
    let notI = (!!startingPoint) ? startingPoint : array[0];
    let i = (!!startingPoint) ? 0 : 1;
    for (; i < array.length; i++) {
        notI = callback(array[i], notI)
    }
    return notI;
}