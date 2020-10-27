// Add your functions here

function map(sourceArray, block){
  for (let i=0; i < sourceArray.length; i++){
    sourceArray[i] = block(sourceArray[i]);
  }
  return sourceArray;
}

function reduce(sourceArray, block, startingPoint){
  let myTotal = sourceArray[0];
  
  for (let i=1; i < sourceArray.length; i++){
    myTotal = block(myTotal, sourceArray[i]);
  }
  if (startingPoint){
    return myTotal + startingPoint;
  }
  else {
    return myTotal
  }
}
const fn = function(a, memo){ return !!a && !!memo};
//sourceArray = [1, 2, true, "razmatazz", false];
sourceArray = [1, 2, true, "razmatazz"];