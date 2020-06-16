// Add your functions here
function map(sourceArray, fn) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArray = [...newArray, fn(sourceArray[i])];
  }
  return newArray;
}

function reduce(sourceArray, fn, startingPoint=0) {
  let value;
  let previous = sourceArray[0];
  if (startingPoint !== 0) {
    previous += startingPoint;
  }
  for(let i = 1; i < sourceArray.length; i++) {
    value = fn(sourceArray[i], previous);
    previous = value;
  }
  return value;
}