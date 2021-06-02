// Add your functions here
function map(array, callback) {
  let result = [];
  array.forEach( element => result.push(callback(element)) );
  return result;
}

function reduce(array, callback, starting){
    let r = (!!starting) ? starting : array[0]
    let i = (!!starting) ? 0 : 1

    for (; i < array.length; i++) {
      r = callback(array[i], r)
    }

    return r;
  } 
  