// Add your functions here

function map(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

function reduce(arr, fn, startPoint) {
  let reducedValue = startPoint || arr[0];
  let i = (!!startPoint) ? 0 : 1;

  for (; i < arr.length; i++) {
   reducedValue = fn(arr[i], reducedValue)
  }
  return reducedValue;
}


