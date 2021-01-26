// Add your functions here
function map(array, callback) {
  let temp = [];

  for (let i = 0; i < array.length; i++) {
    temp.push(callback(array[i]));
  }

  return temp;
}

function reduce(array, callback, start = 0) {
  let temp = !!start ? start : array[0];
  let i = !!start ? 0 : 1;

  for (; i < array.length; i++) {
    temp = callback(array[i], temp);
  }

  return temp;
}