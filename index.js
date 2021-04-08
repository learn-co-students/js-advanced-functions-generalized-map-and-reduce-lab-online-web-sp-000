let originalArray = [];

function map(originalArray, callback) {// Pass in the arguments of an array and callbackfunction 
    let newArray = []// Create an empty array
  
    for (let i = 0; i < originalArray.length; i++) {
      let theElement = originalArray[i]
      newArray.push(callback(theElement))// pass each element into the second function. 
    } //add results the new empty arry
  
    return newArray;
  }
  
  function reduce(array, method, starting) {
    let s = (!!starting) ? starting : array[0] // If we have included a start point, this variable stores that point's value. If none is included, we set it to the first element of the array.
    let i = (!!starting) ? 0 : 1 // Likewise, we set 'i' equal to 0 if we have a starting point, 1 if we don't.
    
    for (; i < array.length; i++) { // We iterate over our array using 'for', plugging in our 'i' value for the array.
       s = method(s, array[i]) // Set 's' equal to our entered function, then include the array and value of 'i' 
    } // After a value has been returned from the function, we return our s variable.
    return s;
}