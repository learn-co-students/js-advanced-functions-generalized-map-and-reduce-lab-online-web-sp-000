function map(src, fn) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(fn(src[i]));
  }
  return r
}

function reduce(src, fn, startingValue) {
  let total = startingValue || src[0];
  let i = (!!startingValue) ? 0 : 1
  for (; i < src.length; i++ ) {
      total = fn(src[i], total)
  }
  return total;
}
