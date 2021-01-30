// Add your functions here

function map(source, callback) {
  let returnValue = []
  for (let element of source) {
    returnValue.push(callback(element))
  }
  return returnValue
}

function reduce(source, callback, startingPoint = 0) {
  let returnValue = (!!startingPoint) ? startingPoint : source[0]
  let i = (!!startingPoint) ? 0 : 1
  for (; i < source.length; i++) {
    returnValue = callback(source[i], returnValue)
  }
  return returnValue
}