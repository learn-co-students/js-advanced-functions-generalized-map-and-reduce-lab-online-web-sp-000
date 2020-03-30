// Add your functions here
function map(array, block) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(block(array[i]))
    }
    return newArray
}

function reduce(array, block, starting=0) {
    let newArray = (!!starting) ? starting : array[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < array.length; i++) {
      newArray = block(array[i], newArray)
    }
  
    return newArray;
}