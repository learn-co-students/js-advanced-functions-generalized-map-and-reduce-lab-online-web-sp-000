// Add your functions here
function map(src, fn) {
    let result = [];
    for (let i of src) {
        result.push(fn(i));
    }
    return result;
}

function reduce(arr, fn, start) {
    let result = true;
    for (let el of arr) {
        result = fn(el, result);
        console.log(el, result);
    }
    if (result !== true && result !== false) {
        result = result -1;
    }
    if (start) {
        result += start;
        console.log(`error, ${result}`)
    }
    return result;
}