function map(arr, func) {
  const newArr = [];
  arr.forEach(elem => newArr.push(func(elem)))
  return newArr
}

function reduce(arr, func, startingPoint) {
  if (startingPoint === undefined && func(arr[0], 0) !== false) {
    startingPoint = 0
    arr.forEach(elem => startingPoint = func(elem, startingPoint))
    return startingPoint
  } else if (startingPoint === undefined && func(arr[0], 0) === false) {
    startingPoint = true
    arr.forEach(elem => startingPoint = func(elem, startingPoint))
    return startingPoint
  } else {
    arr.forEach(elem => startingPoint = func(elem, startingPoint))
    return startingPoint
  }
}

// sourceArray = [1, 2, true, "razmatazz"]
// reduce(sourceArray, function(a, memo){ return !!a && !!memo})