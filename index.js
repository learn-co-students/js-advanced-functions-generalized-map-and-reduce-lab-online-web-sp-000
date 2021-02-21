function map(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

function reduce(arr, fn, startingPoint=0) {
  let sum = startingPoint;
  for (let i = 0; i < arr.length; i++) {
    sum = fn(sum, arr[i]);
  }
  return sum;
}