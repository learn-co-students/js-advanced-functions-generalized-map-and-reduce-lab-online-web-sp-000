// Add your functions here
function map(array, fn){
  const transform = [];
  array.forEach(item => {
    transform.push(fn(item));
  });
  return transform;
}

function reduce(array, fn, startingPoint){
  let startingIndex = 0;
  if (startingPoint == undefined){
    startingIndex = 1;
    startingPoint = array[0];
  }

  let memo = startingPoint;
  for(let i = startingIndex; i < array.length; i++){
    memo = fn(array[i], memo);
  }
  return memo;
}
