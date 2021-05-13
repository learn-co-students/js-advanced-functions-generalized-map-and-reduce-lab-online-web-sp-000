// Add your functions here

function map(array, block) { 
    let new_array = []
    for (let i = 0; i < array.length; i++) {
   new_array.push(block(array[i]));
}
return new_array
}

function reduce(array, block, startingPoint) {
    if (!!startingPoint) { 
        let total = startingPoint
        for (let i = 0; i < array.length; i++) { 
            total = block(array[i], total)
        } 
        return total
    }
        else {
            let total = array[0]
        for (let i = 1; i < array.length; i++) { 
            total = block(array[i], total)
        }
        return total
}
}