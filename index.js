// Add your functions here
function map(sourceArray, func) {
    let arr = []
  
    for (let i = 0; i < sourceArray.length; i++) {
      let arrayElement = sourceArray[i]
      arr.push(func(arrayElement))
    }
  
    return arr;
}
  
function reduce(sourceArray, func, starting){
    let arr = (!!starting) ? starting : sourceArray[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < sourceArray.length; i++) {
      arr = func(sourceArray[i], arr)
    }
  
    return arr;
}