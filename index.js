// Add your functions here
function map(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let elm = arr[i];
    newArr.push(callback(elm));
  }
  return newArr;
}

function reduce(srcArr, cb, starter) {
  let x = (!!starter) ? starter : srcArr[0]
  let i = (!!starter) ? 0 : 1

  for (; i < srcArr.length; i++) {
    x = cb(srcArr[i], x)
  }

  return x;
}