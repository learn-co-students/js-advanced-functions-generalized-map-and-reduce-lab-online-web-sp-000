// Add your functions here

function map(array, method){
    let newArray = []

    array.forEach(function(value){
        newArray.push(method(value))
    })

    return newArray
}

function reduce(array, method, startingValue) {
    let total = startingValue || array[0];
    let i = (!!startingValue) ? 0 : 1
    for (; i < array.length; i++ ) {
        total = method(array[i], total)
    }
    return total;
  }

