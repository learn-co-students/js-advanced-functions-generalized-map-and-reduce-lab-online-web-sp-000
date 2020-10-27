function map(source, callback) {
    let newArray = [];
    for (let i = 0; i < source.length; i++) {
        newArray.push(callback(source[i]));
    }

    return newArray;
}

function reduce(source, callback, startingPoint) {
    let newArray = (!!startingPoint) ? startingPoint : source[0];
    let i = (!!startingPoint) ? 0 : 1;

    for (; i < source.length; i++) {
        newArray = callback(source[i], newArray);
    }
    
    return newArray; 
}