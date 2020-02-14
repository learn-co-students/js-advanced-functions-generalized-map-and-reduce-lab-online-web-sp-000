// Add your functions here

///map 

function  map(sourceArray,callBack) {
  let newArr = [] 
  for ( let i = 0; i < sourceArray.length; i++) {
    let inst = sourceArray[i]
    newArr.push(callBack(inst))   
  }
return newArr;
}

// map(sourceArray, function(inst=0){
// newArr.push(sourceArray[i]*-1));) 
// }

///reduce 

function reduce(sourceArray, callBack, starting){
  let newArr = (!!starting) ? starting : sourceArray[0]
  let i = (!!starting) ? 0 : 1
  for (; i < sourceArray.length; i++) {
    newArr = callBack(sourceArray[i], newArr)
  }
  return newArr;
}
