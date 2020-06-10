function map(array, cb) {
  let r = []
  for (const element of array) {
    r.push(cb(element))
  }
  return r;
}

function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1
  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }
  return r;
}