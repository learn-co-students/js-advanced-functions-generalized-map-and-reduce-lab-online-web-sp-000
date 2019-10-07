// Add your functions here

function map(arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}

function reduce(arr, fn, init) {
  let result = init;
  let i = 0;
  
  if(!init) {
    result = arr[0];
    i = 1;
  }
  
  for (; i < arr.length; i++) {
    result = fn(arr[i], result);
  }
  
  return result;
}