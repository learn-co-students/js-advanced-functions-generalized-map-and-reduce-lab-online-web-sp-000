// Add your functions here
function map(arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;
}

function reduce(arr, func, starting) {
  let r = !!starting ? starting : arr[0];
  let i = !!starting ? 0 : 1;
  for (; i < arr.length; i++) {
    r = func(arr[i], r);
  }
  return r;
}
