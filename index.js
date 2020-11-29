// Add your functions here
function map(array,f){
    let newArray = []
    for (const i of array){
        newArray.push(f(i))
    }
    return newArray
}


function reduce(array, f, startingPoint){
   (!!startingPoint)? array.unshift(startingPoint) : array  

   let memo =  array[0]
   for(let i = 1; i<array.length; i++){
       memo = f(array[i], memo)
   }
return memo

}

