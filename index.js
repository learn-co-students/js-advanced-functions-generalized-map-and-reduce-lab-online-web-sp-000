// Add your functions here
function map(array, callback) {
  let x = [];
  for (let i = 0; i < array.length; i++ ) {
    let a = array[i];
    x.push(callback(a));
  }
  return x;
}

function reduce(array, callback, startingPoint) {
  let x = !!startingPoint ? startingPoint : array[0];
  let i = !!startingPoint ? 0 : 1;
  for(; i < array.length; i++){
    x = callback(array[i], x);
  }
  return x;
}