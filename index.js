// Add your functions here

function map(sourceArray, callback) {
  let array = []
  for (let i = 0; i < sourceArray.length; i++) {
    let value = sourceArray[i]
    array.push(callback(value))
  }
  return array;
}

function reduce(sourceArray, callback, startingPoint) {
  let total = (!!startingPoint) ? startingPoint : sourceArray[0]
  let i = (!!startingPoint) ? 0 : 1

  for (; i < sourceArray.length; i++) {
    total = callback(sourceArray[i], total)
  }
  return total;
}