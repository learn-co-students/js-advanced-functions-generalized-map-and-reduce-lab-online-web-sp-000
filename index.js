// Add your functions here
//callback: passed function (since the receiving function will execute or call that function "call it back")
//function expression: anonymous function
//pointer: variable name, declared function name

//pass callback to a function or within a function
//arity: "how many arguments are expected"
//map and reduce has a lot of repeated code 
//call the function by typing its pointer name and adding ()

  //reduce returns a value 

//map returns a new array 

function map(sourceArray, callBack) {
  let newArray = [];

  for (let i=0; i < sourceArray.length; i++) {
     let element = sourceArray[i];

     newArray.push(callBack(element));
  }

  return newArray;
}

function reduce(sourceArray, callBack, startingPoint) {
  let newArray = (!!startingPoint) ? startingPoint : sourceArray[0];
  let i = (!!startingPoint) ? 0 : 1;

  for (; i < sourceArray.length; i++) {
     newArray = callBack(sourceArray[i], newArray)
  }

  return newArray;
}