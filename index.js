function map (arr, callback){
  let newArr = []
  for (let i = 0; i < arr.length; i++){
    let element = arr[i]
    newArr.push(callback(element))
  }
  return newArr;
}

function reduce(arr, callback, start){
  let r = (!!start) ? start : arr[0]
  let i = (!!start) ? 0 : 1

  for (; i < arr.length; i++) {
    r = callback(arr[i], r)
  }
  return r;
}
