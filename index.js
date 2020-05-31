function map(array, mapFunc) {
  let returnArray = [];
  for(let i = 0; i < array.length; i++) {
    returnArray[i] = mapFunc(array[i]);
  }
  return returnArray;
}

function reduce(array, reduceFunc, startingPoint) {
  let returnVal;
  let firstTime = true;

  while(array.length !== 0) {
    if(firstTime) {
      returnVal = array.pop();
      firstTime = false
    }
    let nextVal = array.pop();
    returnVal = reduceFunc(nextVal, returnVal);
  }

  if(startingPoint) {
    return returnVal + startingPoint;
  } else {
    return returnVal;
  }
}
