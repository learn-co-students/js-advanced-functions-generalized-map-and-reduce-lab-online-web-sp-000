function map(numbers, callback){
  let data = []
  for(var el of numbers){
    data.push(callback(el))
  }
  return data
}

function reduce(numbers, callback, startingPoint){
  let total = startingPoint
  if (!startingPoint){
    total = numbers[0]
    numbers = numbers.slice(1)
  }

  for(var el of numbers){
    total = callback(el, total)
  }
  return total
}