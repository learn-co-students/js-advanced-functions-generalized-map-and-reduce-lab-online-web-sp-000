function map(sourceArray, fn) {
  return sourceArray.map(fn)
}

function reduce(sourceArray, fn, startingPoint) {
  if (typeof startingPoint == 'undefined') {
    return sourceArray.reduce(fn)
  } else {
    return sourceArray.reduce(fn) + startingPoint
  }
}