// Add your functions here
function map(arr, fx) {
  const mappedArr = [];
  for(const e of arr) {
    mappedArr.push(fx(e));
  };
  return mappedArr;
};

function reduce(arr, fx, accumulator) {
  let i = 0;
  if(!accumulator) {
    accumulator = arr[0];
    i = 1;
  };
  for(; i < arr.length; i++) {
    accumulator = fx(arr[i], accumulator);
  };
  return accumulator;
};
