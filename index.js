// Add your functions here

function map(src, cb) {
  const arr = []
  for (const key in src) {
    arr.push(cb(src[key]))
  }
  return arr;
}

function reduce(src, cb, startPoint) {
  let x = (!!startPoint) ? startPoint : src[0]
  let y = (!!startPoint) ? 0 : 1

  for (; y < src.length; y++) {
    x = cb(src[y], x)
  }
  return x;
}
