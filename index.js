// Add your functions here
function map(arr, func){
    return arr.map(x => func(x));
};

function reduce(arr, func, startingPoint=0){
  return arr.reduce(func);
};
