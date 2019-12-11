// Add your functions here
function map(array, fn) {
  let newArray = [];
  array.forEach(element => {
    newArray.push(fn(element));
  });
  return newArray;
}

function reduce(array, fn, starting = 0) {

  // need value = true if no starting given and if one array element is NaN
  // need value = 0/starting if all array are numbers 
  
  let value;
  
  // will set arrayAllNum to true/false depending on what the array is like.
  
  let arrayAllNum = array.every(element => {
    return typeof element === 'number';
  })
  
  if (arrayAllNum === true) {
    value = starting;
  } else {
    value = true;
  }
  
  array.forEach(element => {
    value = fn(element, value)
  })
  return value
}

