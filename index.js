// Add your functions here
const map = function(sourceArray, funct){
    let arr = [];
    for ( const x of sourceArray){
       arr.push(funct(x));
    }
    return arr; 
};

function reduce(arr, callback, start) {
  let accumulator = start ? start : arr[0];
  for (let i = start ? 0 : 1; i < arr.length; i++) {
    accumulator = callback(arr[i], accumulator);
   }
  
  return accumulator;
}
