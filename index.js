function map(sourceArray, func){
  let newArray = [];
  sourceArray.forEach(item => newArray.push(func(item)));
  return newArray;
}

function reduce(sourceArray, func, memo){
  memo = memo || sourceArray.shift()
  sourceArray.forEach(item => memo = func(item, memo));
  return memo;
}
