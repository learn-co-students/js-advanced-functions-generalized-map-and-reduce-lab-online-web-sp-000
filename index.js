// Add your functions here
//callback: passed function (since the receiving function will execute or call that function "call it back")
//function expression: anonymous function
//pointer: variable name, declared function name

//pass callback to a function or within a function
//arity: "how many arguments are expected"
//map and reduce has a lot of repeated code 
//call the function by typing its pointer name and adding ()


//map returns a new array 
function map(array, func){ //take an array and a function
    let r = []
    for (let i = 0; i < array.length; i++){
      r[i] = func(array[i])
    }
    return r
  }
  
  //reduce returns a value 
  function reduce(array, func, startingPoint){
    let r = startingPoint || 0
    for(let i = 0; i < array.length; i++){
      r = func(array[i], r)
    }
    return r
  }