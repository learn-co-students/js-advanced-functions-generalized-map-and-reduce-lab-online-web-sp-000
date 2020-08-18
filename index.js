// Add your functions here
const source = [1,3,5,7,9];

function map(sourceArray, func) {
  let sourceCopy = [];
  for (const element of sourceArray) {
    sourceCopy.push(func(element));
  }
  return sourceCopy;
}

function reduce(sourceArray, callback, start) {
  let total; 
  let i = 0;

  if (start) {
      total = start;
  } 
  else {
      total = sourceArray[0];
      i++;
  }
  
  for (i; i < sourceArray.length; i++) {
      total = callback(sourceArray[i], total)
  }
  return total;
}