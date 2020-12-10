function map(sourceArray, cb) {
   return sourceArray.map(value => cb(value))
}

const reducer = (accumulator, item) => {
    return accumulator + item;
  };

function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}