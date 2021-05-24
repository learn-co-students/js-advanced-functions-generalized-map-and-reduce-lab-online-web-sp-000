// Add your functions here
function map(startingArray, callback) {
    let result = []
    startingArray.forEach(element => {
        result.push(callback(element));
    });
    return result;
}

function reduce(startingArray, callback, startingPoint) {
    let memo = startingArray[0]
    for (let i = 1; i < startingArray.length; i++) {
       memo = callback(startingArray[i], memo);
    }
    if (startingPoint) {
        return startingPoint + memo;
    } else {
        return memo;
    }
}
