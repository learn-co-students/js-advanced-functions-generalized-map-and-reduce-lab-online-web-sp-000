// Add your functions here
function map(data, callback) {
    let arr = []
    for (let i = 0; i < data.length; i++) {
        arr.push(callback(data[i]))
    }
    return arr
}

function reduce(data, callback, start = 0) {
    let val = (!!start) ? start : data[0];
    let i = (!!start) ? 0 : 1

    for (; i < data.length; i++) {
        val = callback(data[i], val)
    }

    return val;

}