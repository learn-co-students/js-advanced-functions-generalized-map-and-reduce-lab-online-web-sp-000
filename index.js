const map = (array, func) => {
  const r = []
  for (let i = 0; i < array.length; i++) {
    r[i] = func(array[i])
  }
  return r
}

const reduce = (array, func, value) => {
  if (typeof value === 'undefined') {
    if (array.some(isNaN)) value = true
    else value = 0
  }
  for (const x of array) {
    value = func(value, x, array)
  }
  return value
}

