function map(array, fnct) {
  let new_array = []
  for (let i = 0; i < array.length; i++) {
    new_array.push(fnct(array[i]))
  }
  return new_array
}

function reduce(array, fnct, starting_point) {
  let value = (!!starting_point) ? starting_point : array[0]
  let i = (!!starting_point) ? 0 : 1

  for (; i < array.length; i++) {
    value = fnct(array[i], value)
  }

  return value
}