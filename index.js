// Add your functions here

function map(array, cb){
  let results = [];
  for (const n of array)
    results.push(cb(n));
  return results;
}

function reduce(array, cb, p){
  let result = p ? p + array[0] : array[0];
  for (let i=1; i < array.length; i++)
    result = cb(array[i], result);
  return result;
}
