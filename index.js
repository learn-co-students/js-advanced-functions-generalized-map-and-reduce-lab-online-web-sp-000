// Add your functions here
function map(array, func) {
  const newArray = [];
  for (const element of array) {
    newArray.push(func(element));
  }
  return newArray;
}

function reduce(array, func, startingValue=0) {
  let total = startingValue;
  for (let i=0; i<array.length; i++){
      if (isNaN(array[i])) {
          total = true
      }
      total = func(array[i], total);
    } return total;
}
