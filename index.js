function map(array, method) { // Pass in the arguments of an array and our function in question
    let newArray = [] // Create an empty array
    for(let i=0; i < array.length; i++) { // Iterate over the array passed in...
        newArray.push(method(array[i])) // and add the results returned from the functions into our new array.
    }
    return newArray // Once all elements have been iterated, return the new array.
}


function reduce(array, method, starting) {
    let s = (!!starting) ? starting : array[0] // If we have included a start point, this variable stores that point's value. If none is included, we set it to the first element of the array.
    let i = (!!starting) ? 0 : 1 // Likewise, we set 'i' equal to 0 if we have a starting point, 1 if we don't.
    
    for (; i < array.length; i++) { // We iterate over our array using 'for', plugging in our 'i' value for the array.
       s = method(s, array[i]) // Set 's' equal to our entered function, then include the array and value of 'i' 
    } // After a value has been returned from the function, we return our s variable.
    return s
}