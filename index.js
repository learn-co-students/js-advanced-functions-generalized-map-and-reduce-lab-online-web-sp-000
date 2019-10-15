// Add your functions here

function map(array, func){
  let r = []
  for (let i = 0; i < array.length; i++){
    r[i] = func(array[i])
  }
  return r
}


function reduce(array, func, startingPoint){
  let r = startingPoint || 0
  for(let i = 0; i < array.length; i++){
    r = func(array[i], r)
  }
  return r
}
