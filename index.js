// Add your functions here
function map(source, callback) {
    let result = [];
    for (const value of source) {result.push(callback(value))}
    return result
}

function reduce(source, callback, startingValue) {
    let result = (!!startingValue) ? startingValue : source[0];
    let i = (!!startingValue) ? 0 : 1;

    for (;i < source.length; i++) {
        result = callback(source[i], result)
    }
    return result
}