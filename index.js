function map (arr, func){
  let newArr = []
  arr.forEach(item => { newArr.push(func(item)) });

  return newArr;
}

function reduce (arr, func, start){
  let returnVal = !!start ? start : arr[0]
  let i = (!!start) ? 0 : 1

  for (; i < arr.length; i++) {
    returnVal = func(arr[i], returnVal)
  }

  return returnVal;
}
