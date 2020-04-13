function map(sourceArray, callback ){
    let newNegative = []
 sourceArray.forEach(element => {
    newNegative.push (callback(element) )
   
 });
 return newNegative 
  }
 
function reduce(sourceArray, callback, startingPoint){
    let result = startingPoint ? startingPoint : sourceArray[0]
   let i = startingPoint ? 0 : 1
   for(;i < sourceArray.length ; i++){
       result = callback(sourceArray[i],result)
   }
  
   return result
}