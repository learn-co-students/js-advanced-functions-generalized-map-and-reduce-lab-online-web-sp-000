// Add your functions here
function map(array,func){
  return array.map(func)
}

function reduce(array,func,startingPoint){
  if (!!startingPoint)
   {return array.reduce(func,startingPoint)}
   else {startingPoint=0;return array.reduce(func)}

}
