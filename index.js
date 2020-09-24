function map(array, func) {
  let result = [];
  for (const item of array) {
    result.push(func(item));
  }
  return result;
}

function reduce(source, func, start){
  let result = !!start ? start : source[0];
  let array = !!start ? source : source.slice(1);
  for (const item of array) {
    result = func(item, result);
  }
  return result;
}
