function map(src, cb) {
  let new_ = []

  for (let i = 0; i < src.length; i++) {
    let theElement = src[i]
    new_.push(cb(theElement))
  }

  return new_;
}

function reduce(src, cb, starting){
  let memo = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
  	// debugger;
    memo = cb(src[i], memo)
  }

  return memo;
}
