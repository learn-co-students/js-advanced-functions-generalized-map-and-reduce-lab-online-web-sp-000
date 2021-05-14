// Add your functions here

function map(source, callback) {
    let new_array = [];
    for (let i = 0; i < source.length; i++) {
        new_array.push(callback(source[i]));
    }
    return new_array;
}

// function reduce(source, callback, startingPoint) {
//     let new_array = (!!startingPoint) ? startingPoint : source[0];
//     let i = (!!startingPoint) ? 0 : 1;
//     for (i < source.length; i++) {
//         new_array = callback(source[i], new_array)
//     }
//     return new_array;
// }

function reduce(source, callback, startingPoint = 0) {
  let returnValue = (!!startingPoint) ? startingPoint : source[0]
  let i = (!!startingPoint) ? 0 : 1
  for (; i < source.length; i++) {
    returnValue = callback(source[i], returnValue)
  }
  return returnValue
}