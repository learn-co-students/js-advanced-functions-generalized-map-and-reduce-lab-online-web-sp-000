// Add your functions here
function map(array, func)
{
  let out = [];
  for(let i=0; i<array.length; i++)
  {
    out.push(func(array[i]))
  }
  return out;
}

function reduce(array, func, startingPoint=0)
{
  let out = array[0];
  for(let i=1; i<array.length; i++)
  {
    out = func(array[i], out)
  }
  if(startingPoint!= 0)
  {
    return out+startingPoint
  }
  else
  {
    return out
  }
}
