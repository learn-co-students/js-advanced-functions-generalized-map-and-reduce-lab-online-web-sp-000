// my own map-like methods
function map(srcArray, func) {
  let r = []
    for (let i = 0; i < srcArray.length; i++ ) {
      r.push(func(srcArray[i]))
    }
    return r
  }

//
// my own reduce-like methods
function reduce(srcArray, func, startingPoint){
  let total = (!!startingPoint) ? startingPoint : srcArray[0]
  let index = (!!startingPoint) ? 0 : 1

  for (; index < srcArray.length; index++) {
    total = func(srcArray[index], total)
  }

  return r;
}
