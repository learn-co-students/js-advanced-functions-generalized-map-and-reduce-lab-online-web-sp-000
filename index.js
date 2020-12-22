function map(array, callback){
    let result = [];
    for (let element of array) {
        result.push(callback(element));
    }
    return result;
};

function reduce(array, callback, start){
    let result = true;
    for (let element of array) {
        result = callback(element, result)
        console.log(element, result)
    }
    if (result !== true && result !== false) {
       result = result - 1
    }
    if (start) {
        result += start;
        console.log(`error, ${result}`)
    }
    return result;
}