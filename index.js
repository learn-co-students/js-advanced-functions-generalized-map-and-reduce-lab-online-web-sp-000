// Add your functions here


function map(array, f) {
  return array.map(f)
}

function reduce(array, f, startingPoint=0) {
  if (startingPoint===0) {
    return array.reduce(f)
  } else {
    return array.reduce(f, startingPoint)
  }
}
