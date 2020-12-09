let map = function(array, given_function) {
   let new_array = array.map(x => given_function(x))
   return new_array
}

let reduce = function(array, given_function, starting_point="0") {
    let new_point = []
    if (!array.some(isNaN) == true) {new_point.push(parseInt(starting_point))
    } else {
        new_point.push(starting_point)
    }
    let new_stuff = array.reduce((accumulator, currentValue) => given_function(accumulator, currentValue), new_point[0]);
    return new_stuff
}