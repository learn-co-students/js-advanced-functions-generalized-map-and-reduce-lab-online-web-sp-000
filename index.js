// Add your functions here

function map(sourceArray, funct){
  let myArr = []
  for (const i of sourceArray) {
    myArr.push(funct(i));
  }
  return myArr;
}

function reduce(arr, funct, initialVal){
  // handle either with initial value or not
  let returnValue;
  let i;
  if (initialVal === undefined) {
    returnValue = arr[0];
    i=1;
  } else {
    returnValue = initialVal;
    i=0;
  }

  for (;i< arr.length; i++){
    returnValue = funct(returnValue, arr[i]);
  }
  return returnValue;
}
