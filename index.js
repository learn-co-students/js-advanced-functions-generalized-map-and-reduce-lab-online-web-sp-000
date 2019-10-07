// Add your functions here
function map(array, func) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(func(array[i]));
  }
  return newArray;
}

function reduce(array, func, sp = 0) {
  let memo;
  let i;
  if (!!sp) {
    memo = sp;
    i = 0;
  } else {
    memo = array[0];
    i = 1;
  }
  while (i < array.length) {
    memo = func(array[i], memo);
    i++;
  }
  return memo;
}
