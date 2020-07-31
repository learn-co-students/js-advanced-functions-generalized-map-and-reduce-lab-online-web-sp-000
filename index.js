// Add your functions here

function map(array, callback){

  let newArray = [ ]

for ( let i = 0 ; i<array.length; i++){

let x =  callback(array[i])
// calling the callback function on each element on the original array

newArray.push(x)


}

return newArray



}

// some sort of if statement that checks did we get a startingPoint
// function reduce(array, callback, startingPoint){
//
//
//  if(!array[i] === false) return false
//
//  // else return true
//
//  if(!!startingPoint)
//
//  let total = startingPoint
//
//  for (let i = 0 ; i < array.length; i++){
//
//   array[i] += total
// }
//
// // find a way to add each element in the array
//
// return total
// }


function reduce(arr, callback, start) {

  let accumulator = start ? start : arr[0];
  //
  let i = start ? 0 : 1;

  for (; i < arr.length; i++) {
    
    accumulator = callback(arr[i], accumulator);
  }

  return accumulator;
} 
// let sum = total
//    // the inital
//       for (let i = 0; i < array.length; i++ ){
//         // itereate throughout the array
//       sum += array[i]
//       // currentValue = array[i]
//       // adding the index[i] plus the prior value
//       // adding each element into the array
//
//       }
//
//
//
//    return sum
