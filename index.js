function map(arr, callback) {
  let newArr = [];
  
  for(let i = 0; i < arr.length; i++) {
    let newEl = arr[i]; 
    newArr.push(callback(newEl));
  }
  return newArr; 
}

function reduce(arr, callback, startPoint) {
  let memo = (!!startPoint) ? startPoint : arr[0];
  let i = (!!startPoint) ? 0 : 1
  for(; i < arr.length; i++) {
      memo = callback(arr[i], memo);
  }
  return memo;
}