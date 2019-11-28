
function map(arr,fn) {
  let newArr=[]
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]))
  }
  return newArr
}

function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}
