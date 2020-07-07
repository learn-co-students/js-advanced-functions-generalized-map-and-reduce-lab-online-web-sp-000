// Add your functions here
const map = (arr, fn) => {
  const r = []
  for (let i = 0; i < arr.length; i++) {
    r[i] = fn(arr[i])
  }
  return r
}

const reduce = (arr, fn, val) => {
  if (typeof val === 'undefined') {
    if (arr.some(isNaN)) val = true
    else val = 0
  }
  for (const x of arr) {
    val = fn(val, x, arr)
  }
  return val
}
