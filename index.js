// Add your functions here
function map(set, arg) {
    let result = [];
    for (let n of set) {
        result.push(arg(n));
    }
    return result;
}


function reduce(set, arg, result = 0) {
    // let result = 0;
    for (let n of set) {
        result = arg(n, result);
    }
    return result;
}