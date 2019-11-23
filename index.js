function map(array, fn) {
  const mappedArray = [];
  for(const value of array) {
    mappedArray.push(fn(value));
  };
  return mappedArray;
};

function reduce(array, fn, accumulator) {
  let i = 0;
  if(!accumulator) {
    accumulator = array[0];
    i = 1;
  };
  for(; i < array.length; i++) {
    accumulator = fn(array[i], accumulator);
  };
  return accumulator;
};