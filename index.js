function map(array,fns) { // passes in an array and a function
    let newArray = []; // initializes a new array object
    for (let i = 0; i < array.length; i++){ // starts a for loop that runs while i is less than array length
        newArray.push(fns(array[i])); // performs the passed in function on each element in the array using i++ as index
    }
    return newArray

}

function reduce(array, fns, start) {
    let t;
    
    if(start) {// if the starting position is given
        t= start;  // set t = to the value of start
        for(let i = 0; i< array.length; i++) { // iterates throug the array 
            t = fns(array[i], t) // set i equal to the value of the provided function with the array index and start point.
        }}

        else{

        t = array[0]; // set i to that first element in the array
        for(let i = 1; i < array.length; i++){
            t = fns(array[i], t) // calls the provided function with a start point of 0
        }        
    }
    return t // returns the evaluation from the function

}
